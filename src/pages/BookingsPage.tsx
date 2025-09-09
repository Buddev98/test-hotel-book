import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import BookingCard from '../components/BookingCard';

const BookingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { bookings, cancelBooking, getUserBookings } = useBooking();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">
            Please log in to view your bookings.
          </p>
          <button
            onClick={() => navigate('/login', { state: { from: '/bookings' } })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }
  
  const userBookings = user ? getUserBookings(user.email) : [];
  const activeBookings = userBookings.filter(booking => booking.status === 'confirmed');
  const pastBookings = userBookings.filter(booking => booking.status === 'cancelled');
  
  const handleCancelBooking = (bookingId: string) => {
    if (window.confirm('Are you sure you want to cancel this booking? This action cannot be undone.')) {
      cancelBooking(bookingId);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Bookings</h1>
      
      {userBookings.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
          <p className="text-gray-600 mb-6">
            You haven't made any bookings yet. Start exploring hotels and book your next stay!
          </p>
          <button
            onClick={() => navigate('/search')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Browse Hotels
          </button>
        </div>
      ) : (
        <div>
          {activeBookings.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Bookings</h2>
              <div className="space-y-4">
                {activeBookings.map(booking => (
                  <BookingCard 
                    key={booking.id} 
                    booking={booking} 
                    onCancel={handleCancelBooking}
                  />
                ))}
              </div>
            </section>
          )}
          
          {pastBookings.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Past & Cancelled Bookings</h2>
              <div className="space-y-4">
                {pastBookings.map(booking => (
                  <BookingCard 
                    key={booking.id} 
                    booking={booking} 
                    onCancel={handleCancelBooking}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingsPage;
