# Base Image
FROM python:3.13-slim

# Install dependencies system
RUN apt-get update && apt-get install -y \
  gcc \
  libpq-dev \
  supervisor \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set environment variables
ENV TZ=Asia/Jakarta

# create workdir
WORKDIR /app

# Copy all to workdir
COPY . .

# Upgrade PIP & Install Dependencies
RUN python -m pip install --upgrade pip && python -m pip install --no-cache-dir -r /app/requirements.txt --verbose

# Expose Port
EXPOSE 5001

# Start app.py
CMD ["python", "app.py"]