import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sliders, Search, Star, MapPin } from 'lucide-react';
import HotelCard from '../components/HotelCard';
import { hotels } from '../data/hotels';
import { Hotel, SearchFilters } from '../types';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get search params
  const locationParam = searchParams.get('location') || '';
  const checkInParam = searchParams.get('checkIn') || '';
  const checkOutParam = searchParams.get('checkOut') || '';
  const guestsParam = searchParams.get('guests') || '2';
  
  // Filter state
  const [filters, setFilters] = useState<SearchFilters>({
    location: locationParam,
    checkIn: checkInParam,
    checkOut: checkOutParam,
    guests: parseInt(guestsParam) || 2,
    priceRange: [0, 1000],
    rating: null
  });
  
  // Apply filters
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = [...hotels];
      
      // Filter by location
      if (filters.location) {
        results = results.filter(hotel => 
          hotel.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
      
      // Filter by price range
      results = results.filter(hotel => 
        hotel.price >= filters.priceRange[0] && hotel.price <= filters.priceRange[1]
      );
      
      // Filter by rating
      if (filters.rating) {
        results = results.filter(hotel => hotel.rating >= filters.rating);
      }
      
      // Filter by capacity (guests)
      results = results.filter(hotel => 
        hotel.rooms.some(room => room.capacity >= filters.guests)
      );
      
      setFilteredHotels(results);
      setIsLoading(false);
    }, 500);
  }, [filters]);
  
  const handleFilterChange = (name: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {filteredHotels.length} {filteredHotels.length === 1 ? 'hotel' : 'hotels'} found
        {filters.location && ` in ${filters.location}`}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters - Mobile Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 px-4"
          >
            <Sliders className="h-5 w-5 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Filters Sidebar */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-1/4`}>
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            
            {/* Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  placeholder="Where are you going?"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">${filters.priceRange[0]}</span>
                <span className="text-sm text-gray-600">${filters.priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
              />
            </div>
            
            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <div className="flex flex-wrap gap-2">
                {[null, 3, 4, 5].map((rating, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterChange('rating', rating)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.rating === rating
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {rating === null ? 'Any' : `${rating}+ ${rating === 5 ? 'star' : 'stars'}`}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Guests */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Guests
              </label>
              <select
                value={filters.guests}
                onChange={(e) => handleFilterChange('guests', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Reset Filters */}
            <button
              onClick={() => setFilters({
                location: '',
                checkIn: '',
                checkOut: '',
                guests: 2,
                priceRange: [0, 1000],
                rating: null
              })}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors mt-2"
            >
              Reset Filters
            </button>
          </div>
        </div>
        
        {/* Hotel Results */}
        <div className="md:w-3/4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
                    <div className="flex gap-1 mb-4">
                      <div className="h-6 bg-gray-300 rounded w-16"></div>
                      <div className="h-6 bg-gray-300 rounded w-16"></div>
                      <div className="h-6 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="h-10 bg-gray-300 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredHotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search filters or exploring different locations.
              </p>
              <button
                onClick={() => setFilters({
                  location: '',
                  checkIn: '',
                  checkOut: '',
                  guests: 2,
                  priceRange: [0, 1000],
                  rating: null
                })}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
