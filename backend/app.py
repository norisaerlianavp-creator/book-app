from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
import os

app = Flask(__name__)
CORS(app)

# Load books from JSON file
def load_books():
    try:
        with open('books.json', 'r') as f:
            data = json.load(f)
            return data.get('books', [])
    except FileNotFoundError:
        return []

# Save books to JSON file
def save_books(books_data):
    with open('books.json', 'w') as f:
        json.dump({'books': books_data}, f, indent=2)

# Initialize books from JSON file
books = load_books()

@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify(books)

@app.route('/api/books', methods=['POST'])
def add_book():
    data = request.json
    book = {
        'id': len(books) + 1,
        'title': data.get('title'),
        'author': data.get('author'),
        'cover': data.get('cover', ''),  # Book cover image URL
        'rating': data.get('rating', 0),  # Book rating (0-5)
        'pages': data.get('pages', 0),    # Number of pages
        'genre': data.get('genre', ''),   # Book genre
        'status': data.get('status', 'want-to-read')  # Reading status
    }
    books.append(book)
    save_books(books)  # Save to JSON file
    return jsonify(book), 201

@app.route('/api/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.json
    for book in books:
        if book['id'] == book_id:
            book['title'] = data.get('title', book['title'])
            book['author'] = data.get('author', book['author'])
            book['cover'] = data.get('cover', book['cover'])
            book['rating'] = data.get('rating', book['rating'])
            book['pages'] = data.get('pages', book['pages'])
            book['genre'] = data.get('genre', book['genre'])
            book['status'] = data.get('status', book['status'])
            save_books(books)  # Save to JSON file
            return jsonify(book)
    return jsonify({'error': 'Book not found'}), 404

@app.route('/api/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    for i, book in enumerate(books):
        if book['id'] == book_id:
            deleted_book = books.pop(i)
            save_books(books)  # Save to JSON file
            return jsonify(deleted_book)
    return jsonify({'error': 'Book not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000) 