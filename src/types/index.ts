export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  amenities: string[];
  rooms: Room[];
}

export interface Room {
  id: string;
  name: string;
  description: string;
  capacity: number;
  price: number;
  images: string[];
  amenities: string[];
}

export interface Booking {
  id: string;
  hotelId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
  rating: number | null;
}
