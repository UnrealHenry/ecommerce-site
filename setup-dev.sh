#!/bin/bash

echo "🚀 Starting E-commerce Development Environment"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        return 0
    else
        return 1
    fi
}

echo -e "${BLUE}Checking prerequisites...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js is installed${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install npm first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm is installed${NC}"

# Install dependencies if needed
echo -e "${BLUE}Installing dependencies...${NC}"

# Client dependencies
if [ ! -d "client/node_modules" ]; then
    echo -e "${YELLOW}Installing client dependencies...${NC}"
    cd client && npm install && cd ..
else
    echo -e "${GREEN}✅ Client dependencies already installed${NC}"
fi

# Server dependencies
if [ ! -d "server/node_modules" ]; then
    echo -e "${YELLOW}Installing server dependencies...${NC}"
    cd server && npm install && cd ..
else
    echo -e "${GREEN}✅ Server dependencies already installed${NC}"
fi

# Create .env file for server if it doesn't exist
if [ ! -f "server/.env" ]; then
    echo -e "${YELLOW}Creating server .env file...${NC}"
    cat > server/.env << EOF
# Stripe Configuration (Demo keys - replace with your own)
STRIPE_SECRET_KEY=sk_test_demo_key_replace_with_real_key
STRIPE_PUBLISHABLE_KEY=pk_test_demo_key_replace_with_real_key

# Server Configuration
PORT=3002
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:5173

# CORS Origins
CORS_ORIGIN=http://localhost:5173
EOF
    echo -e "${GREEN}✅ Server .env file created${NC}"
    echo -e "${YELLOW}⚠️  Please update the Stripe keys in server/.env with your real keys${NC}"
else
    echo -e "${GREEN}✅ Server .env file already exists${NC}"
fi

# Check if ports are available
echo -e "${BLUE}Checking ports...${NC}"

if check_port 3002; then
    echo -e "${YELLOW}⚠️  Port 3002 is already in use (Backend)${NC}"
else
    echo -e "${GREEN}✅ Port 3002 is available (Backend)${NC}"
fi

if check_port 5173; then
    echo -e "${YELLOW}⚠️  Port 5173 is already in use (Frontend)${NC}"
else
    echo -e "${GREEN}✅ Port 5173 is available (Frontend)${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Setup complete!${NC}"
echo ""
echo -e "${BLUE}To start the development servers:${NC}"
echo ""
echo -e "${YELLOW}Terminal 1 (Backend):${NC}"
echo "cd server && npm run dev"
echo ""
echo -e "${YELLOW}Terminal 2 (Frontend):${NC}"
echo "cd client && npm run dev"
echo ""
echo -e "${BLUE}The application will be available at:${NC}"
echo "Frontend: http://localhost:5173"
echo "Backend:  http://localhost:3002"
echo ""
echo -e "${YELLOW}📝 Don't forget to:${NC}"
echo "1. Update Stripe API keys in server/.env"
echo "2. Start both servers in separate terminals"
echo ""
