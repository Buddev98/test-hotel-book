import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Booking } from '../types';
import { bookings as initialBookings } from '../data/bookings';

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  cancelBooking: (bookingId: string) => void;
  getUserBookings: (email: string) => Booking[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);

  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  const cancelBooking = (bookingId: string) => {
    setBookings(
      bookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' as const } 
          : booking
      )
    );
  };

  const getUserBookings = (email: string) => {
    return bookings.filter(booking => booking.customerEmail === email);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking, getUserBookings }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
