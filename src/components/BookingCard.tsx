import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Booking } from '../types';
import { hotels } from '../data/hotels';
import { format } from 'date-fns';

interface BookingCardProps {
  booking: Booking;
  onCancel: (id: string) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, onCancel }) => {
  const hotel = hotels.find(h => h.id === booking.hotelId);
  const room = hotel?.rooms.find(r => r.id === booking.roomId);
  
  if (!hotel || !room) {
    return null;
  }
  
  const checkInDate = new Date(booking.checkIn);
  const checkOutDate = new Date(booking.checkOut);
  
  const formatDate = (date: Date) => {
    return format(date, 'MMM dd, yyyy');
  };
  
  const isUpcoming = new Date() < checkInDate;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="md:flex">
        <div className="md:w-1/3 h-48">
          <img 
            src={hotel.images[0]} 
            alt={hotel.name} 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="p-4 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{hotel.location}</span>
              </div>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              booking.status === 'confirmed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Check-in</p>
                <p className="text-sm font-medium">{formatDate(checkInDate)}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Check-out</p>
                <p className="text-sm font-medium">{formatDate(checkOutDate)}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Users className="h-5 w-5 text-indigo-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Guests</p>
                <p className="text-sm font-medium">{booking.guests}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600">{room.name}</p>
              <p className="text-lg font-bold text-gray-900">
                Total: ${booking.totalPrice}
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Link 
                to={`/hotel/${hotel.id}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm"
              >
                View Hotel
              </Link>
              
              {booking.status === 'confirmed' && isUpcoming && (
                <button
                  onClick={() => onCancel(booking.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
