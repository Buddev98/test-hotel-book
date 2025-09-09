import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
        <div 
          className="h-72 md:h-96 cursor-pointer"
          onClick={() => openModal(0)}
        >
          <img 
            src={images[0]} 
            alt="Main" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((image, index) => (
            <div 
              key={index} 
              className="h-36 md:h-48 cursor-pointer relative"
              onClick={() => openModal(index + 1)}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg"
              />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-medium">+{images.length - 5} more</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute left-4 text-white p-2 rounded-full hover:bg-gray-800"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            <img 
              src={images[currentIndex]} 
              alt={`Gallery ${currentIndex}`} 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          
          <button 
            className="absolute right-4 text-white p-2 rounded-full hover:bg-gray-800"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          <div className="absolute bottom-4 text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
