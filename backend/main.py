from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.core.config import settings
from app.api.api import api_router
from app.core.database import Base, engine


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Only create tables in production, not drop them
    if settings.ENVIRONMENT == "production":
        Base.metadata.create_all(bind=engine)
    else:
        Base.metadata.create_all(bind=engine)
        # Only drop tables in development
        pass
    yield

app = FastAPI(
    title="Charted API",
    description="Backend API for Charted application",
    version="1.0.0",
    debug=settings.DEBUG,
    lifespan=lifespan
)


# CORS middleware for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_HOSTS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include API router
app.include_router(api_router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to Charted API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}