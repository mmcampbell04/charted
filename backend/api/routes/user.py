from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from db.database import get_db
from schema.user import CreateUserRequest, CreateUserResponse
from core.crud import create_user, get_user_by_email


router = APIRouter(
    prefix="/user",
    tags=["user"],
)

