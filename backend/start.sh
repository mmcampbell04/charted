#!/bin/bash

# Start script for Railway deployment
echo "Starting Charted API..."

# Run database migrations (if needed)
echo "Setting up database..."

# Start the application
echo "Starting FastAPI application..."
exec uvicorn main:app --host 0.0.0.0 --port $PORT
