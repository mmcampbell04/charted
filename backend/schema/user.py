from pydantic import BaseModel
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
