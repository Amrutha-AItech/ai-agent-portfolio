 # 🤖 AI Agent Portfolio

> An AI-powered developer portfolio with an integrated conversational AI agent that allows recruiters and visitors to interact with my portfolio using natural language.

---

## 📌 Overview

AI Agent Portfolio is a modern developer portfolio designed to combine a traditional portfolio experience with an interactive AI assistant.

Instead of requiring recruiters or visitors to manually search through different sections of the portfolio, the integrated AI agent allows them to ask questions naturally and receive responses based on the portfolio's projects, technical skills, experience, architecture, and development work.

The project demonstrates how an AI agent can be integrated into a real-world web application rather than being implemented as a standalone chatbot.

### Example questions

- "Tell me about this developer."
- "What projects has she built?"
- "Explain the AI Shopping Assistant."
- "What technologies were used in the project?"
- "How does the AI Shopping Assistant architecture work?"
- "What backend technologies does she know?"
- "What AI technologies has she worked with?"
- "Which project uses Gemini?"
- "Explain the deployment architecture."
- "What are the main technical skills?"
- "Tell me about the security project."
- "Why was FastAPI used for the portfolio backend?"

---

# 🎯 Project Goals

The main goals of this project are:

- Build a professional developer portfolio.
- Integrate an AI agent directly into the portfolio.
- Allow recruiters to interact with the portfolio conversationally.
- Demonstrate practical AI integration.
- Demonstrate frontend and backend development.
- Demonstrate REST API communication.
- Demonstrate prompt engineering and contextual AI responses.
- Present technical projects in an easy-to-understand way.
- Create a portfolio that behaves like an interactive technical product rather than a static webpage.

---

# ✨ Features

## 🤖 AI Portfolio Assistant

The portfolio contains an integrated AI assistant that allows visitors to communicate with the portfolio using natural language.

The assistant can answer questions related to:

- Developer profile
- Technical skills
- Projects
- Project architecture
- Technologies
- AI implementations
- Frontend development
- Backend development
- Databases
- APIs
- Deployment
- Development experience
- Learning and technical interests

---

## 💬 Natural Language Interaction

Visitors do not need to use predefined commands.

For example:

    User:
    How does the AI Shopping Assistant work?

    AI:
    The AI Shopping Assistant combines a React frontend,
    Django REST backend, PostgreSQL database and Gemini
    to provide natural-language shopping assistance.

---

## 🧠 Portfolio-Aware Responses

The AI assistant is designed around the information presented in the portfolio.

The goal is to keep responses relevant to the developer and projects represented by the website rather than making the assistant behave like a completely generic chatbot.

---

## 💻 Interactive Portfolio

The portfolio presents:

- About section
- Technical skills
- Projects
- Project technologies
- Project architecture
- AI-related work
- Security-related work
- Contact information
- AI assistant

---

## 📱 Responsive Interface

The frontend is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

## ⚡ Modern Frontend

The frontend is built using React and Vite with a component-based architecture.

---

## 🔐 Environment-Based API Configuration

Sensitive configuration such as API keys is kept outside the source code using environment variables.

The `.env` files are excluded from Git using `.gitignore`.

---

# 🏗️ System Architecture

    ┌───────────────────────────────────────────────┐
    │                  VISITOR                      │
    │              Recruiter / User                │
    └───────────────────────┬───────────────────────┘
                            │
                            ▼
    ┌───────────────────────────────────────────────┐
    │                React + Vite                    │
    │                  Frontend                     │
    │                                               │
    │  • Portfolio UI                               │
    │  • Projects                                   │
    │  • Skills                                     │
    │  • AI Chat Interface                          │
    │  • Responsive Design                          │
    └───────────────────────┬───────────────────────┘
                            │
                            │ HTTP / REST API
                            ▼
    ┌───────────────────────────────────────────────┐
    │                  FastAPI                       │
    │                  Backend                      │
    │                                               │
    │  • API endpoints                              │
    │  • Request validation                          │
    │  • Agent logic                                │
    │  • Portfolio context                          │
    │  • CORS                                       │
    └───────────────────────┬───────────────────────┘
                            │
                            ▼
    ┌───────────────────────────────────────────────┐
    │                Google Gemini                   │
    │                   AI Layer                    │
    │                                               │
    │  • Understands user query                     │
    │  • Processes portfolio context                │
    │  • Generates contextual response              │
    └───────────────────────┬───────────────────────┘
                            │
                            ▼
    ┌───────────────────────────────────────────────┐
    │                 AI RESPONSE                   │
    │                                               │
    │          FastAPI → React → User               │
    └───────────────────────────────────────────────┘

---

# 🔄 How the AI Agent Works

The basic request flow is:

    1. Visitor opens the portfolio.

    2. Visitor opens the AI assistant.

    3. Visitor enters a natural-language question.

    4. React captures the message.

    5. React sends the message to the backend API.

    6. FastAPI receives and validates the request.

    7. Portfolio/project context is prepared.

    8. The request is sent to the Gemini API.

    9. Gemini processes the request and generates a response.

    10. FastAPI returns the AI response.

    11. React displays the response inside the chat interface.

---

# 🧩 Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and production build |
| JavaScript | Application logic |
| HTML | Page structure |
| CSS | Styling and responsive design |

## Backend

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| Pydantic | Request/data validation |

## AI

| Technology | Purpose |
|---|---|
| Google Gemini | Generative AI model |
| Gemini API | AI communication |
| Prompt Engineering | Context-aware responses |
| Portfolio Context | Grounding responses in project information |

## Development

| Tool | Purpose |
|---|---|
| VS Code | Development environment |
| Git | Version control |
| GitHub | Source code hosting |
| npm | Frontend dependency management |
| Python venv | Backend environment |

---

# 📁 Project Structure

    ai-agent-portfolio/
    │
    ├── backend/
    │   ├── .env
    │   ├── .gitignore
    │   ├── main.py
    │   ├── requirements.txt
    │   ├── venv/
    │   └── __pycache__/
    │
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    │
    ├── src/
    │   ├── assets/
    │   │   └── hero.png
    │   │
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .gitignore
    ├── .oxlintrc.json
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js

---

# 🖥️ Frontend

The frontend is responsible for rendering the portfolio and providing the interactive user experience.

The React application contains the main portfolio interface and the AI assistant interaction layer.

### Frontend responsibilities

- Render portfolio sections.
- Display technical skills.
- Display projects.
- Display project information.
- Provide responsive UI.
- Capture user messages.
- Send AI requests to the backend.
- Display AI-generated responses.

---

# ⚙️ Backend

The backend is implemented using Python and FastAPI.

It acts as the communication layer between the React frontend and the Gemini AI service.

### Backend responsibilities

- Receive requests from the frontend.
- Validate incoming data.
- Handle AI assistant requests.
- Prepare portfolio context.
- Communicate with Gemini.
- Return AI responses.
- Handle API errors.
- Manage CORS configuration.

---

# 🤖 AI Agent Architecture

The AI assistant follows a simple application-level agent architecture:

    User Query
         │
         ▼
    React Chat UI
         │
         ▼
    FastAPI Endpoint
         │
         ▼
    Request Validation
         │
         ▼
    Portfolio Context
         │
         ▼
    Gemini API
         │
         ▼
    Generated Response
         │
         ▼
    FastAPI
         │
         ▼
    React UI
         │
         ▼
    User

The portfolio context helps the AI assistant provide answers related to the actual developer and projects represented by the application.

---

# 🔐 Security

Security is considered during development and deployment.

### Environment variables

Sensitive values such as API keys are stored in environment variables.

Example:

    GEMINI_API_KEY=your_api_key_here

The actual key must never be committed to GitHub.

### Git protection

The following types of files are excluded from version control:

- `.env`
- Python virtual environments
- `node_modules`
- Build output
- Python cache files
- Local development files

---

# 🚫 Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

    GEMINI_API_KEY=your_gemini_api_key

Do not replace the placeholder with your real API key in the README.

Do not commit the `.env` file to GitHub.

---

# 🛠️ Installation

## Prerequisites

Before running the project locally, make sure the following are installed:

- Node.js
- npm
- Python 3
- Git
- VS Code
- A Gemini API key

---

# 1️⃣ Clone the Repository

    git clone https://github.com/Amrutha-AItech/ai-agent-portfolio.git

Navigate into the project:

    cd ai-agent-portfolio

---

# 2️⃣ Install Frontend Dependencies

Run:

    npm install

---

# 3️⃣ Create Python Virtual Environment

Navigate to the backend:

    cd backend

Create a virtual environment:

    python -m venv venv

---

# 4️⃣ Activate Virtual Environment

### Windows PowerShell

    .\venv\Scripts\Activate.ps1

### Windows Command Prompt

    venv\Scripts\activate

### macOS / Linux

    source venv/bin/activate

---

# 5️⃣ Install Backend Dependencies

Run:

    pip install -r requirements.txt

---

# 6️⃣ Configure Environment Variables

Inside the `backend` directory, create:

    .env

Add:

    GEMINI_API_KEY=your_gemini_api_key

Keep the API key private.

---

# ▶️ Running the Application

The application requires two development servers:

1. FastAPI backend
2. React frontend

---

# 🚀 Start Backend

From the `backend` directory:

    uvicorn main:app --reload

The backend will normally be available at:

    http://127.0.0.1:8000

FastAPI documentation can normally be accessed at:

    http://127.0.0.1:8000/docs

---

# 🚀 Start Frontend

Open another terminal.

From the project root:

    npm run dev

Vite will display the local development URL in the terminal.

Normally it will be similar to:

    http://localhost:5173

Open the displayed URL in your browser.

---

# 🔁 Development Workflow

A typical local development workflow is:

    Terminal 1

    cd backend
    .\venv\Scripts\Activate.ps1
    uvicorn main:app --reload


    Terminal 2

    cd ai-agent-portfolio
    npm run dev

Then open the Vite URL in your browser.

---

# 🧪 Testing the AI Assistant

After starting both servers:

### Step 1

Open the frontend.

### Step 2

Open the AI assistant.

### Step 3

Ask a portfolio-related question.

Example:

    Tell me about the AI Shopping Assistant project.

### Step 4

The frontend sends the request to FastAPI.

### Step 5

FastAPI communicates with Gemini.

### Step 6

The generated response is returned to the frontend.

### Step 7

The response appears in the AI assistant interface.

---

# 🧪 API Testing

FastAPI provides interactive API documentation.

Open:

    http://127.0.0.1:8000/docs

The Swagger interface can be used to inspect and test available API endpoints.

---

# 📦 Production Build

To create a production build of the React frontend:

    npm run build

The generated production files will be placed in the Vite build output directory.

To preview the production build locally:

    npm run preview

---

# 🌐 Deployment

The project can be deployed using separate frontend and backend services.

## Frontend

The React/Vite frontend can be deployed using platforms such as:

- Vercel
- Netlify
- Render

## Backend

The FastAPI backend can be deployed using platforms such as:

- Render
- Railway
- Fly.io
- Other platforms supporting Python/ASGI applications

## Environment Variables

When deploying the backend, configure:

    GEMINI_API_KEY

inside the hosting platform's environment variable settings.

Never expose the API key in the React frontend.

---

# 📊 Deployment Architecture

    ┌──────────────────────────────┐
    │          Visitor            │
    └──────────────┬───────────────┘
                   │
                   ▼
    ┌──────────────────────────────┐
    │       Vercel / Frontend      │
    │                              │
    │       React + Vite           │
    └──────────────┬───────────────┘
                   │
                   │ HTTPS API Request
                   ▼
    ┌──────────────────────────────┐
    │       Backend Hosting        │
    │                              │
    │          FastAPI             │
    │          Uvicorn             │
    └──────────────┬───────────────┘
                   │
                   │ API Request
                   ▼
    ┌──────────────────────────────┐
    │        Google Gemini         │
    │            AI                │
    └──────────────┬───────────────┘
                   │
                   │ AI Response
                   ▼
    ┌──────────────────────────────┐
    │          FastAPI             │
    └──────────────┬───────────────┘
                   │
                   ▼
    ┌──────────────────────────────┐
    │       React Portfolio        │
    └──────────────────────────────┘

---

# 📋 Main Projects

## 🛒 AI Shopping Assistant

A full-stack AI-integrated e-commerce application.

### Features

- User registration
- User login
- Authentication
- Product browsing
- Product details
- Manual cart management
- AI-powered shopping assistant
- Add products to cart using AI
- Cart management
- Checkout
- Order creation
- Order history
- Responsive interface

### Technology Stack

- React
- Vite
- JavaScript
- Django REST Framework
- Python
- PostgreSQL
- Gemini API
- REST API
- Vercel
- Render

### AI Interaction

The AI assistant allows users to interact with products using natural language.

For example:

    Add the black hoodie to my cart.

The AI interprets the request and interacts with the application's product/cart functionality.

---

# 🔐 AI Security Project

A security-focused AI project designed to demonstrate how artificial intelligence can be incorporated into security-oriented software workflows.

The project focuses on combining:

- AI
- Backend development
- Security concepts
- API design
- Automation
- Practical software engineering

---

# 🤖 AI Agent Portfolio

This project demonstrates the integration of an AI agent directly into a developer portfolio.

The agent can answer questions about:

- Developer profile
- Projects
- Technical skills
- Technologies
- Architecture
- AI implementations
- Development experience

This turns the portfolio into an interactive technical demonstration.

---

# 🧠 What This Project Demonstrates

This project demonstrates practical experience with:

### Frontend Engineering

- React component architecture
- Vite
- JavaScript
- Responsive UI
- API integration
- State management
- User interaction

### Backend Engineering

- Python
- FastAPI
- REST API development
- Request validation
- API integration
- CORS
- Environment configuration

### Artificial Intelligence

- Generative AI
- Gemini API
- Prompt engineering
- AI application integration
- Context-aware responses
- Conversational interfaces

### Software Engineering

- Git
- GitHub
- Environment variables
- Project structure
- Local development
- Deployment
- API architecture
- Separation of frontend and backend

---

# 🧑‍💻 Engineering Approach

The project follows a separation-of-concerns approach.

### Frontend

Responsible for:

- User interface
- User interactions
- Portfolio presentation
- Chat interface

### Backend

Responsible for:

- API communication
- Validation
- AI request handling
- Security-sensitive configuration

### AI Layer

Responsible for:

- Understanding natural-language requests
- Processing portfolio context
- Generating useful responses

This separation makes the application easier to maintain and extend.

---

# 🔮 Future Improvements

Potential improvements include:

- Streaming AI responses
- Improved conversational memory
- Retrieval-Augmented Generation (RAG)
- Vector database integration
- Semantic search across projects
- Project-specific knowledge retrieval
- Resume analysis
- Recruiter-focused queries
- GitHub activity integration
- Automated project updates
- Voice-based interaction
- Multilingual AI support
- Analytics for anonymous portfolio interactions
- Improved AI guardrails
- Automated testing
- CI/CD pipeline
- Performance optimization

---

# 🧪 Future Testing Strategy

Future testing can include:

### Frontend

- Component testing
- UI testing
- Responsive testing
- Browser compatibility testing

### Backend

- API unit tests
- Integration tests
- Validation tests
- Error-handling tests

### AI

- Prompt tests
- Context accuracy tests
- Hallucination checks
- Out-of-scope question handling
- Response consistency tests

### Deployment

- Production API testing
- Frontend/backend connectivity testing
- Environment variable validation
- Performance testing

---

# 🛡️ AI Safety & Reliability

The AI assistant should be treated as a portfolio interaction layer rather than an authoritative source for information outside the portfolio.

The application is designed to keep AI responses focused on the developer's portfolio and technical information.

Potential future improvements include:

- Stronger grounding
- Retrieval-based context
- Response validation
- Prompt injection protection
- Rate limiting
- Request logging
- Input sanitization
- Abuse prevention

---

# 📈 Performance Considerations

The application is designed with performance in mind.

Important considerations include:

- Optimized frontend assets
- Lazy loading where appropriate
- Efficient API requests
- Minimal unnecessary API calls
- Production builds
- Responsive layouts
- Backend response handling
- Proper loading states

---

# 🧰 Useful Commands

## Frontend

Install dependencies:

    npm install

Start development server:

    npm run dev

Build production version:

    npm run build

Preview production build:

    npm run preview

---

## Backend

Create virtual environment:

    python -m venv venv

Activate environment on Windows:

    .\venv\Scripts\Activate.ps1

Install dependencies:

    pip install -r requirements.txt

Start FastAPI:

    uvicorn main:app --reload

---

# 🌿 Git Workflow

Initialize Git:

    git init

Check repository status:

    git status

Add files:

    git add .

Create a commit:

    git commit -m "Initial portfolio project"

Rename branch:

    git branch -M main

Add GitHub remote:

    git remote add origin https://github.com/Amrutha-AItech/ai-agent-portfolio.git

Push to GitHub:

    git push -u origin main

Check remote:

    git remote -v

---

# 🔒 Git & Secret Management

Before pushing the project to GitHub, verify that sensitive files are ignored.

The repository should NOT contain:

    .env
    backend/.env
    venv/
    backend/venv/
    node_modules/
    __pycache__/
    *.pyc
    dist/

You can verify ignored files using:

    git check-ignore -v .env

and:

    git check-ignore -v backend/.env

If the command reports the corresponding `.gitignore` rule, the file is being ignored.

---

# 📜 License

This project is currently intended as a personal portfolio and demonstration project.

All rights reserved unless otherwise specified.

---

# 👩‍💻 Author

## Amrutha-AItech

BCA Student | Software Engineering Enthusiast | AI & Full-Stack Developer

Interested in:

- Software Engineering
- Artificial Intelligence
- Full-Stack Development
- Backend Engineering
- System Design
- Cloud & Deployment
- Data Structures & Algorithms

---

# 🔗 Links

### GitHub

https://github.com/Amrutha-AItech

### Repository

https://github.com/Amrutha-AItech/ai-agent-portfolio

### Live Portfolio

https://ai-agent-portfolio-seven.vercel.app

---

# 📬 Contact

For professional opportunities, collaboration, or technical discussions, please connect through the contact information provided on the portfolio.

---

# ⭐ Why This Project?

Traditional developer portfolios are mostly static pages where recruiters manually navigate through sections.

This project explores a different approach:

    Portfolio
        +
    Conversational AI
        =
    Interactive Developer Experience

Instead of simply displaying information, the portfolio allows visitors to interact with the information.

A recruiter can ask a question, receive an answer, explore projects, and understand the technical work through a conversational interface.

---

# 🚀 Project Highlights

- AI-powered developer portfolio
- Conversational portfolio assistant
- React-based frontend
- FastAPI backend
- Python backend development
- Google Gemini integration
- REST API architecture
- Portfolio-aware AI responses
- Responsive web interface
- Environment-based secret management
- Git/GitHub version control
- Deployment-ready architecture

---

# 🏁 Final Result

The completed application combines a modern portfolio website with an AI assistant to create an interactive developer experience.

The project demonstrates the ability to take an AI model and integrate it into a complete software application involving:

    Frontend
        ↓
    Backend API
        ↓
    AI Integration
        ↓
    Contextual Response
        ↓
    Interactive User Experience

This project is part of my broader portfolio of AI-integrated software engineering projects and demonstrates my interest in building practical applications using modern web and AI technologies.

---

## ⭐ If you find this project interesting

Feel free to explore the repository, review the architecture, and experiment with the AI-powered portfolio experience.

Built with ❤️ using React, FastAPI, Python, and Google Gemini.
