import { Hotel } from '../types';

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    description: 'Experience luxury in the heart of downtown. Our 5-star hotel offers spacious rooms with stunning city views, a rooftop pool, and award-winning dining options.',
    location: 'New York',
    price: 299,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    ],
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Pool', 'Restaurant', 'Room Service', 'Parking', 'Business Center'],
    rooms: [
      {
        id: '101',
        name: 'Deluxe King Room',
        description: 'Spacious room with king-sized bed and city view',
        capacity: 2,
        price: 299,
        images: ['https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'],
        amenities: ['King Bed', 'City View', 'Mini Bar', 'Free WiFi', 'Flat-screen TV']
      },
      {
        id: '102',
        name: 'Executive Suite',
        description: 'Luxurious suite with separate living area and panoramic views',
        capacity: 3,
        price: 499,
        images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['King Bed', 'Separate Living Area', 'Panoramic View', 'Mini Bar', 'Free WiFi', 'Flat-screen TV', 'Jacuzzi']
      }
    ]
  },
  {
    id: '2',
    name: 'Seaside Resort & Spa',
    description: 'Escape to our beachfront paradise with private beach access, infinity pools, and world-class spa treatments. Perfect for a relaxing getaway.',
    location: 'Miami',
    price: 349,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ],
    amenities: ['Private Beach', 'Spa', 'Infinity Pool', 'Free WiFi', 'Restaurant', 'Room Service', 'Water Sports', 'Yoga Classes'],
    rooms: [
      {
        id: '201',
        name: 'Ocean View Room',
        description: 'Comfortable room with stunning ocean views and private balcony',
        capacity: 2,
        price: 349,
        images: ['https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80'],
        amenities: ['Queen Bed', 'Ocean View', 'Private Balcony', 'Mini Bar', 'Free WiFi', 'Flat-screen TV']
      },
      {
        id: '202',
        name: 'Beachfront Villa',
        description: 'Exclusive villa with direct beach access and private plunge pool',
        capacity: 4,
        price: 899,
        images: ['https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80'],
        amenities: ['King Bed', 'Direct Beach Access', 'Private Pool', 'Kitchenette', 'Free WiFi', 'Flat-screen TV', 'Outdoor Shower']
      }
    ]
  },
  {
    id: '3',
    name: 'Mountain View Lodge',
    description: 'Nestled in the mountains, our rustic-chic lodge offers cozy accommodations, outdoor adventures, and breathtaking natural scenery.',
    location: 'Denver',
    price: 199,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1548704806-0c20f7ea6474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ],
    amenities: ['Fireplace', 'Hiking Trails', 'Free WiFi', 'Restaurant', 'Bar', 'Ski Storage', 'Shuttle Service', 'Terrace'],
    rooms: [
      {
        id: '301',
        name: 'Mountain Cabin',
        description: 'Cozy cabin with fireplace and mountain views',
        capacity: 2,
        price: 199,
        images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['Queen Bed', 'Fireplace', 'Mountain View', 'Free WiFi', 'Coffee Maker']
      },
      {
        id: '302',
        name: 'Family Lodge Suite',
        description: 'Spacious suite with two bedrooms and full kitchen',
        capacity: 6,
        price: 399,
        images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['2 Bedrooms', 'Full Kitchen', 'Fireplace', 'Balcony', 'Free WiFi', 'Flat-screen TV', 'Dining Area']
      }
    ]
  },
  {
    id: '4',
    name: 'Urban Boutique Hotel',
    description: 'A stylish boutique hotel in the trendy arts district, featuring contemporary design, artisanal breakfast, and personalized service.',
    location: 'San Francisco',
    price: 249,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      'https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    ],
    amenities: ['Free WiFi', 'Artisanal Breakfast', 'Rooftop Lounge', 'Bike Rental', 'Coffee Bar', 'Concierge', 'Art Gallery', 'Library'],
    rooms: [
      {
        id: '401',
        name: 'Designer Room',
        description: 'Stylish room with unique design elements and city views',
        capacity: 2,
        price: 249,
        images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['Queen Bed', 'City View', 'Designer Furniture', 'Free WiFi', 'Smart TV', 'Rainfall Shower']
      },
      {
        id: '402',
        name: 'Loft Suite',
        description: 'Spacious loft-style suite with separate living area',
        capacity: 3,
        price: 399,
        images: ['https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['King Bed', 'Separate Living Area', 'Workspace', 'Free WiFi', 'Smart TV', 'Espresso Machine', 'Minibar']
      }
    ]
  },
  {
    id: '5',
    name: 'Historic Inn & Gardens',
    description: 'Step back in time at our charming 19th-century inn, featuring beautifully preserved architecture, lush gardens, and farm-to-table dining.',
    location: 'Charleston',
    price: 279,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    ],
    amenities: ['Gardens', 'Free WiFi', 'Farm-to-Table Restaurant', 'Afternoon Tea', 'Library', 'Concierge', 'Parking', 'Terrace'],
    rooms: [
      {
        id: '501',
        name: 'Heritage Room',
        description: 'Elegant room with period furnishings and garden view',
        capacity: 2,
        price: 279,
        images: ['https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'],
        amenities: ['Queen Bed', 'Garden View', 'Antique Furnishings', 'Free WiFi', 'Clawfoot Tub', 'Organic Toiletries']
      },
      {
        id: '502',
        name: 'Carriage House Suite',
        description: 'Private suite in the historic carriage house with fireplace',
        capacity: 4,
        price: 459,
        images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['King Bed', 'Fireplace', 'Private Entrance', 'Sitting Area', 'Free WiFi', 'Clawfoot Tub', 'Organic Toiletries', 'Mini Fridge']
      }
    ]
  },
  {
    id: '6',
    name: 'Desert Oasis Resort',
    description: 'An exclusive desert retreat featuring luxurious casitas, rejuvenating spa treatments, and stunning desert landscapes.',
    location: 'Scottsdale',
    price: 399,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ],
    amenities: ['Spa', 'Pool', 'Free WiFi', 'Restaurant', 'Bar', 'Fitness Center', 'Desert Tours', 'Yoga Classes'],
    rooms: [
      {
        id: '601',
        name: 'Desert View Casita',
        description: 'Private casita with stunning desert views and outdoor shower',
        capacity: 2,
        price: 399,
        images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['King Bed', 'Desert View', 'Private Patio', 'Outdoor Shower', 'Free WiFi', 'Flat-screen TV', 'Mini Bar']
      },
      {
        id: '602',
        name: 'Luxury Pool Suite',
        description: 'Expansive suite with private plunge pool and mountain views',
        capacity: 3,
        price: 699,
        images: ['https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80'],
        amenities: ['King Bed', 'Private Pool', 'Mountain View', 'Fireplace', 'Free WiFi', 'Flat-screen TV', 'Kitchenette', 'Outdoor Dining Area']
      }
    ]
  }
];
