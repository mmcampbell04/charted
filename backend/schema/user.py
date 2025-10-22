from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class User(BaseModel):
    id: int
    name: Optional[str] = None
    email: str
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None


class CreateUserRequest(BaseModel):
    name: str
    email: str
    password: str
    

class CreateUserResponse(BaseModel):
    id: int
    name: Optional[str] = None
    email: str
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None
    
class UserPublic(User):
    id: int
    # name: Optional[str] = None
    # email: str
    # is_active: bool
    # created_at: datetime
    # updated_at: Optional[datetime] = None

# # JSON payload containing access token
class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"




# Contents of JWT token
class TokenPayload(BaseModel):
    sub: str | None = None


class NewPassword(BaseModel):
    token: str
    new_password: str = Field(min_length=8, max_length=40)