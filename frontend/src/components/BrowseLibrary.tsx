
import { Search, Filter, Star, Plus } from 'lucide-react';
import { useState } from 'react';
import { books } from '../data/dummyData';
import BookCard from './BookCard';

const BrowseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = ['all', ...new Set(books.map(book => book.genre))];
  
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Browse Library</h2>
        <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
          <Filter size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Genre Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedGenre === genre
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {genre === 'all' ? 'All Genres' : genre}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-600">
        {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} found
      </p>

      {/* Books Grid */}
      <div className="space-y-3">
        {filteredBooks.map((book) => (
          <div key={book.id} className="relative">
            <BookCard book={book} variant="discover" />
            <button className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors shadow-lg">
              <Plus size={16} />
            </button>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No books found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default BrowseLibrary;
