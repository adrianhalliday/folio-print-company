# Use Node.js 18 LTS (not Alpine) for better native module compatibility
FROM node:18

# Set working directory
WORKDIR /app

# Install system dependencies for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for legacy support and native builds
ENV NODE_OPTIONS="--openssl-legacy-provider"
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV SASS_BINARY_SITE=https://github.com/sass/dart-sass/releases/download
ENV SASS_BINARY_NAME=dart-sass

# Copy package files first for better Docker layer caching
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force && \
    npm install --legacy-peer-deps --no-optional --unsafe-perm

# Copy source code
COPY . .

# Expose the port dynamically (Cloud Run will set PORT env var)
EXPOSE $PORT

# For Cloud Run compatibility - build then start production server
CMD ["sh", "-c", "npm run build && NODE_OPTIONS='--openssl-legacy-provider' npx nuxt start --hostname 0.0.0.0 --port $PORT"]