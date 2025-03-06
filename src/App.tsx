import React, { useState, useEffect } from 'react';
import { Heart, Flower, Gift, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import ImageSlideshow from './components/ImageSlideshow';
import FlowerButton from './components/FlowerButton';
import WishButton from './components/WishButton';
import LoopyMeme from './components/LoopyMeme';
import RoseFlower from './components/RoseFlower';

function App() {
  const [showWish, setShowWish] = useState(false);
  const [showFlower, setShowFlower] = useState(false);

  // Images for slideshow - using Unsplash for stock photos
  const images = [
    'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/481677782_1046845550813959_6908014009685116688_n.jpg?stp=dst-jpg_p552x414_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHrhyshtmsJQU9-MUNUsnAJzSeHo6aJaITNJ4ejpolohPN0PxbKBQnrtjTO2EES9cEwwnRTpei3E5cZbsIkyDgf&_nc_ohc=d5r1ibjlBXEQ7kNvgHm4AIV&_nc_oc=AdibE7hW8HAf6cajW-wGIF0ptQD6XCZ8v94gPpF7Q132W-v76nhvYJ6ENfjBPy8fMmGG-w9cwPVr-v-GD5zQfo9N&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=ANg1sXGfffOzJ4L3lH1kb2G&oh=00_AYBfgXAbIgtppBSaQy4ZXirrVrANCE5011QMexk6G-PVTw&oe=67CFB515',
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=1920&q=80',
    'https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=1920&q=80',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=1920&q=80',
    'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=1920&q=80',
    'https://images.unsplash.com/photo-1518895312237-a9e23508077d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=1920&q=80',
    // Add duplicate images at the end to ensure smooth looping
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=1920&q=80',
    'https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=1920&q=80'
  ];

  // Meme images (placeholder URLs - replace with actual meme URLs)
  const memes = [
    'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1518542331925-4e91e9aa0074?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  ];

  const handleWishClick = () => {
    setShowWish(true);
  };

  const handleCloseWish = () => {
    setShowWish(false);
  };

  const handleFlowerClick = () => {
    setShowFlower(true);
    setTimeout(() => setShowFlower(false), 5000);
  };

  return (
    <div className="min-h-screen absolute z-0 bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 relative overflow-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Header */}
      <header className="pt-10 pb-6 text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-pink-600 drop-shadow-lg font-script"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Chúc Mừng 8/3 Em Yêu
        </motion.h1>
        <motion.div 
          className="mt-2 text-pink-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ngày của em, ngày của tình yêu
        </motion.div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Image slideshow */}
        <div className="mb-12">
          <ImageSlideshow images={images} />
        </div>
        
        {/* Interactive buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <WishButton onClick={handleWishClick} />
          <FlowerButton onClick={handleFlowerClick} />
        </div>
        
        {/* Meme gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {memes.map((meme, index) => (
            <LoopyMeme key={index} imageUrl={meme} />
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-pink-600 relative z-10">
        <p>Made with <Heart className="inline-block h-4 w-4 text-pink-600 animate-pulse" /> for you</p>
      </footer>
      
      {/* Popup wish - stays until user clicks */}
      <AnimatePresence>
        {showWish && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-md text-center relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button 
                onClick={handleCloseWish}
                className="absolute top-2 right-2 text-pink-400 hover:text-pink-600 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-pink-600 mb-4 font-script">Lời Chúc Ngọt Ngào</h2>
              <p className="text-lg text-pink-500">
                Chúc em luôn xinh đẹp, hạnh phúc và yêu đời. Mỗi ngày trôi qua đều là ngày tuyệt vời với em.
                Anh yêu em rất nhiều!
              </p>
              <div className="mt-6 flex justify-center">
                <Gift className="h-8 w-8 text-pink-500" />
              </div>
              {/* <p className="mt-4 text-sm text-pink-400">
                Nhấn vào nút X để đóng
              </p> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Rose flower animation with blooming effect */}
      <AnimatePresence>
        {showFlower && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ 
                scale: [0, 0.5, 0.8, 1, 1.1, 2],
                rotate: [-80, -40, 0, 40, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                duration: 3,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                ease: "easeOut"
              }}
              className="w-64 h-64"
            >
              <RoseFlower />
              <motion.div
                className="absolute inset-0 bg-pink-200 rounded-full z-[-1]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 0.2, 0.1],
                  scale: [0.5, 1.5, 2]
                }}
                transition={{ duration: 3 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;