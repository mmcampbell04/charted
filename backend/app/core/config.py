from pydantic_settings import BaseSettings
from typing import List
from decouple import config


class Settings(BaseSettings):
    # API Settings
    PROJECT_NAME: str = "Charted API"
    
    # CORS Settings
    ALLOWED_HOSTS: List[str] = config(
        "ALLOWED_HOSTS", 
        default="http://localhost:3000,http://localhost:5173"
    ).split(",")
    
     # Database Settings
    DATABASE_URL: str = config("DATABASE_URL", default="sqlite:///./charted.db")
   

    # Environment
    ENVIRONMENT: str = config("ENVIRONMENT", default="development")
    DEBUG: bool = config("DEBUG", default=True, cast=bool)

    # JWT Settings
    SECRET_KEY: str = config("JWT_SECRET_KEY", default="your-secret-key-here")
    ALGORITHM: str = config("ALGORITHM", default="HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
