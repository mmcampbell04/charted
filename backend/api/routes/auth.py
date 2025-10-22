from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from db.database import get_db
from schema.user import CreateUserRequest, CreateUserResponse, AuthResponse
from core.crud import create_user, get_user_by_email, authenticate_user
from fastapi.security import OAuth2PasswordRequestForm
from core.security import create_access_token
from core.config import settings
from datetime import timedelta

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


@router.post("/login/token", response_model=AuthResponse)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(subject=user.email, expires_delta=access_token_expires)
    return AuthResponse(access_token=access_token, token_type="bearer")