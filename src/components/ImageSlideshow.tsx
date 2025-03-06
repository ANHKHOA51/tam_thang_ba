import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSlideshowProps {
  images: string[];
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  const getVisibleImages = () => {
    // Get 3 consecutive images starting from currentIndex
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };
  
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
      <motion.div 
        className="flex h-full w-full"
        initial={{ x: 0 }}
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        {getVisibleImages().map((image, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            className="flex-1 h-full px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Slideshow image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Navigation dots */}
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.slice(0, images.length - 2).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-pink-500' : 'bg-pink-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlideshow;