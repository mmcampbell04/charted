from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from db.database import get_db
from schema.user import CreateUserRequest, CreateUserResponse
from core.crud import create_user, get_user_by_email


router = APIRouter(
    prefix="/auth",
    tags=["authentication"],
)

@router.post("/register", response_model=CreateUserResponse)

async def register_user(user: CreateUserRequest, db: Session = Depends(get_db)):
    # Check if user already exists
    existing_user = get_user_by_email(db, user.email)
   
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="A user with this email already exists in the system.",
        )
    # Create new user
    new_user = create_user(db, user)
    # TODO: fastapi template - send email?
    return new_user