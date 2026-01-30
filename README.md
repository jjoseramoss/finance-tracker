# Fintracker Starter Template

This is a starter template for a FinTech application with a Next.js frontend and a FastAPI backend.

## Structure

```
fintracker/
├── frontend/    # Next.js + TailwindCSS + TypeScript
└── backend/     # FastAPI + Python
```

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/scripts/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the backend:
   ```bash
   uvicorn main:app --reload
   ```
   The backend will be available at [http://localhost:8000](http://localhost:8000).
   Swagger documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs).

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the frontend:
   ```bash
   npm run dev
   ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Features Included

- **Monorepo Structure**: Clean separation of frontend and backend.
- **FastAPI**: Modern, fast (high-performance) web framework for building APIs.
- **Next.js**: The React framework for the web.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **CORS Configured**: Backend already allows requests from the frontend.
- **Full-stack Example**: Pre-configured fetch call from Next.js to FastAPI.

## Standards Followed

- **Modular Design**: Backend and frontend are decoupled.
- **Type Safety**: TypeScript on frontend and Pydantic-ready FastAPI on backend.
- **Developer Experience**: Hot-reloading enabled for both stacks.
- **RESTful API**: Clean endpoint structure.
