import React from 'react';
import { Room } from '../types';
import { Users, Check } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onSelect: () => void;
  checkIn: string;
  checkOut: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onSelect, checkIn, checkOut }) => {
  // Calculate number of nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const nights = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={room.images[0]} 
            alt={room.name} 
            className="h-48 w-full object-cover md:h-full"
          />
        </div>
        
        <div className="p-4 md:w-2/3">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-600">Up to {room.capacity} guests</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mt-2 mb-3">
            {room.description}
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {room.amenities.slice(0, 6).map((amenity, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div>
              <span className="text-2xl font-bold text-gray-900">${room.price}</span>
              <span className="text-gray-600 text-sm"> / night</span>
              <p className="text-sm text-gray-500">
                ${room.price * nights} total for {nights} {nights === 1 ? 'night' : 'nights'}
              </p>
            </div>
            
            <button
              onClick={onSelect}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Select Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
