from fastapi import APIRouter, Depends
from app.core.security import get_current_active_user
from app.schema.user import UserResponse
from app.models.user import User

router = APIRouter()


# shows how to get the current user's information using the token.
@router.get("/me", response_model=UserResponse)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user