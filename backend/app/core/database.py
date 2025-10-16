from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# Create database engine
def get_engine():
    if "sqlite" in settings.DATABASE_URL:
        # SQLite configuration for development
        return create_engine(
            settings.DATABASE_URL,
            connect_args={"check_same_thread": False}
        )
    else:
        # PostgreSQL configuration for production with psycopg3
        # Convert postgresql:// to postgresql+psycopg:// for psycopg3
        database_url = settings.DATABASE_URL
        if database_url.startswith("postgresql://"):
            database_url = database_url.replace("postgresql://", "postgresql+psycopg://", 1)
        
        return create_engine(
            database_url,
            pool_pre_ping=True,
            pool_recycle=300
        )

engine = get_engine()

# Create Base class
Base = declarative_base()

# Create session local
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
metadata = MetaData()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

Base.metadata.create_all(bind=engine)