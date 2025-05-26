# Book Tracker App

A full-stack web application for managing your reading list, built with Flask and React.

## Features

- 📚 Add, view, update, and delete books
- 📖 Track reading status (unread/reading/completed)
- 🎨 Modern and responsive UI with Tailwind CSS
- 🔄 Real-time updates
- ⚡ Fast and efficient with React + Vite
- 🛡️ Type-safe with TypeScript

## Tech Stack

### Backend
- Python 3.x
- Flask
- Flask-CORS
- SQLAlchemy
- python-dotenv

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- shadcn/ui components

## Prerequisites

- Python 3.x
- Node.js 16.x or later
- npm or yarn

## Getting Started

### Backend Setup

1. Create and activate a virtual environment:
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

2. Install backend dependencies:
```bash
pip install -r requirements.txt
```

3. Start the Flask server:
```bash
cd backend
python app.py
```

The backend server will start on http://localhost:5000

### Frontend Setup

1. Install frontend dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:5173

## API Documentation

### Endpoints

#### GET /api/books
- Returns all books
- Response: Array of book objects

#### POST /api/books
- Creates a new book
- Request Body:
```json
{
  "title": "string",
  "author": "string",
  "status": "unread" | "reading" | "completed"
}
```

#### PUT /api/books/<id>
- Updates an existing book
- Request Body: Same as POST

#### DELETE /api/books/<id>
- Deletes a book by ID

## Project Structure

```
book-tracker-app/
├── backend/
│   └── app.py              # Flask backend API
├── frontend/
│   ├── src/
│   │   ├── types/
│   │   │   └── book.ts     # TypeScript interfaces
│   │   ├── services/
│   │   │   └── api.ts      # API service functions
│   │   ├── App.tsx         # Main React component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles
│   ├── tailwind.config.js  # Tailwind configuration
│   └── package.json        # Frontend dependencies
└── requirements.txt        # Backend dependencies
```

## Development

### Backend Development
- The backend uses Flask for the API
- CORS is enabled for frontend communication
- Currently using in-memory storage (can be extended to use a database)

### Frontend Development
- Built with React + Vite for fast development
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components for consistent UI

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Authentication system
- [ ] Search and filtering
- [ ] Sorting options
- [ ] Book categories/tags
- [ ] Reading progress tracking
- [ ] Book ratings and reviews
- [ ] Database integration
- [ ] User profiles and personal libraries

## License

This project is licensed under the MIT License - see the LICENSE file for details.
