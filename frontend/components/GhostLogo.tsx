"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export const GhostLogo = () => {
    const colors = [
        "#FFB3D9", // Pastel pink
        "#5ebe8dff", // Sky blue
        "#566F62", // Medium blue
        "#3D5A4F", // Dark blue-gray
        "#1c3d2dff", // Very dark blue
    ]

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        // We'll scope the selection to this component's SVG if possible, 
        // but for now document.querySelector is fine as long as there's only one or we accept they move together.
        // To make it robust, we can use a ref, but let's stick to the current logic for simplicity.
        // Actually, let's use a ref for the eye movement to be relative to the logo.
        // However, the original code used document.querySelector("svg").
        // I will try to make it self-contained but keep the logic similar.

        // Simplification: Just calculate based on window center or relative to the component?
        // The original code used rect of the svg. I'll use a ref.

        // For now, I'll direct port the logic but scoped.
        const rect = document.getElementById("ghost-logo-svg")?.getBoundingClientRect()

        if (rect) {
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const deltaX = (mousePosition.x - centerX) * 0.08
            const deltaY = (mousePosition.y - centerY) * 0.08

            const maxOffset = 3 // Reduced movement for smaller logo
            setEyeOffset({
                x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
                y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
            })
        }
    }, [mousePosition])

    return (
        <motion.div
            className="relative w-12 h-12" // Smaller size for navbar
            animate={{
                y: [0, -4, 0],
                scaleY: [1, 1.05, 1],
            }}
            transition={{
                duration: 2.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
            style={{ transformOrigin: "top center" }}
        >
            <svg id="ghost-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 289" className="w-full h-full">
                <defs>
                    <clipPath id="shapeClipSmall">
                        <path d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z" />
                    </clipPath>
                </defs>

                <foreignObject width="231" height="289" clipPath="url(#shapeClipSmall)">
                    <div className="w-full h-full">
                        <MeshGradient colors={colors} className="w-full h-full" speed={1} />
                    </div>
                </foreignObject>

                <motion.ellipse
                    rx="20"
                    ry="30"
                    fill="currentColor"
                    className="text-white animate-blink"
                    animate={{
                        cx: 80 + eyeOffset.x,
                        cy: 120 + eyeOffset.y,
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />
                <motion.ellipse
                    rx="20"
                    ry="30"
                    fill="currentColor"
                    className="text-white animate-blink"
                    animate={{
                        cx: 150 + eyeOffset.x,
                        cy: 120 + eyeOffset.y,
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />
            </svg>
            <style jsx>{`
        .animate-blink {
          animation: blink 3s infinite ease-in-out;
        }
        @keyframes blink {
          0%, 90%, 100% { ry: 30; }
          95% { ry: 3; }
        }
      `}</style>
        </motion.div>
    )
}
