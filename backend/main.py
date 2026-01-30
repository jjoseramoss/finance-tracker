from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Fintracker API")

# Configure CORS
# In production, you should specify the exact origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Fintracker API"}

@app.get("/api/hello")
async def hello():
    return {"message": "Hello from FastAPI"}
