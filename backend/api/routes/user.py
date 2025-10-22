from fastapi import APIRouter, Depends
from schema.user import UserPublic, User
from core.login import get_current_active_user


router = APIRouter(
    prefix="/user",
    tags=["user"],
)


@router.get("/me", response_model=UserPublic)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

