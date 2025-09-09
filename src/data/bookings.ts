import { Booking } from '../types';

// Sample bookings data (would typically come from a backend)
export const bookings: Booking[] = [
  {
    id: 'b1',
    hotelId: '1',
    roomId: '101',
    checkIn: '2023-10-15',
    checkOut: '2023-10-20',
    guests: 2,
    totalPrice: 1495,
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    status: 'confirmed'
  },
  {
    id: 'b2',
    hotelId: '3',
    roomId: '301',
    checkIn: '2023-11-05',
    checkOut: '2023-11-10',
    guests: 2,
    totalPrice: 995,
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    status: 'confirmed'
  }
];
