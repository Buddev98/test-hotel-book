import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Check, Calendar, Users } from 'lucide-react';
import { format } from 'date-fns';
import { hotels } from '../data/hotels';
import { Hotel, Room } from '../types';
import ImageGallery from '../components/ImageGallery';
import RoomCard from '../components/RoomCard';
import { useAuth } from '../context/AuthContext';

const HotelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get search params or set defaults
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const checkInParam = searchParams.get('checkIn') || format(today, 'yyyy-MM-dd');
  const checkOutParam = searchParams.get('checkOut') || format(tomorrow, 'yyyy-MM-dd');
  const guestsParam = parseInt(searchParams.get('guests') || '2');
  
  // Fetch hotel data
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const foundHotel = hotels.find(h => h.id === id);
      setHotel(foundHotel || null);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const handleRoomSelect = (room: Room) => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/hotel/${id}` } });
      return;
    }
    
    navigate(`/booking?hotelId=${id}&roomId=${room.id}&checkIn=${checkInParam}&checkOut=${checkOutParam}&guests=${guestsParam}`);
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            <div className="h-72 md:h-96 bg-gray-300 rounded-lg"></div>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-36 md:h-48 bg-gray-300 rounded-lg"></div>
              ))}
            </div>
          </div>
          
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-6"></div>
          
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-300 rounded"></div>
            ))}
          </div>
          
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-gray-300 rounded-lg h-40 mb-4"></div>
          ))}
        </div>
      </div>
    );
  }
  
  if (!hotel) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Hotel Not Found</h2>
        <p className="text-gray-600 mb-6">The hotel you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/search')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Browse Hotels
        </button>
      </div>
    );
  }
  
  // Filter rooms by capacity
  const availableRooms = hotel.rooms.filter(room => room.capacity >= guestsParam);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-500 mr-1" />
            <span className="text-gray-600">{hotel.location}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
            <span className="text-gray-600">{hotel.rating} stars</span>
          </div>
        </div>
      </div>
      
      <ImageGallery images={hotel.images} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About this hotel</h2>
            <p className="text-gray-600 mb-4">
              {hotel.description}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">{amenity}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 sticky top-20">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Your Stay</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <div className="relative">
                <input
                  type="date"
                  value={checkInParam}
                  min={format(today, 'yyyy-MM-dd')}
                  onChange={(e) => {
                    const params = new URLSearchParams(searchParams);
                    params.set('checkIn', e.target.value);
                    navigate(`/hotel/${id}?${params.toString()}`);
                  }}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOutParam}
                  min={checkInParam}
                  onChange={(e) => {
                    const params = new URLSearchParams(searchParams);
                    params.set('checkOut', e.target.value);
                    navigate(`/hotel/${id}?${params.toString()}`);
                  }}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <div className="relative">
                <select
                  value={guestsParam}
                  onChange={(e) => {
                    const params = new URLSearchParams(searchParams);
                    params.set('guests', e.target.value);
                    navigate(`/hotel/${id}?${params.toString()}`);
                  }}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-md mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Starting from</span>
                <span className="font-semibold text-gray-900">${Math.min(...hotel.rooms.map(r => r.price))}/night</span>
              </div>
              <p className="text-sm text-gray-500">
                Prices may vary depending on room type and dates
              </p>
            </div>
            
            <button
              onClick={() => document.getElementById('rooms-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              View Available Rooms
            </button>
          </div>
        </div>
      </div>
      
      <section id="rooms-section" className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Rooms</h2>
        
        {availableRooms.length > 0 ? (
          <div className="space-y-6">
            {availableRooms.map(room => (
              <RoomCard 
                key={room.id} 
                room={room} 
                checkIn={checkInParam}
                checkOut={checkOutParam}
                onSelect={() => handleRoomSelect(room)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <p className="text-yellow-800">
              No rooms available for {guestsParam} guests. Try adjusting your search criteria.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default HotelDetailPage;
