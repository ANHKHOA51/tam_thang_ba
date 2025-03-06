import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeartProps {
  x: number;
  delay: number;
  size: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100, // random x position (0-100%)
      delay: Math.random() * 5, // random delay for animation
      size: Math.random() * 20 + 10, // random size between 10-30px
    }));
    
    setHearts(initialHearts);
  }, []);
  
  return (
    <div className="z-40 fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-400"
          style={{ 
            left: `${heart.x}%`,
            top: '-50px',
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: ['0%', '100vh'],
            opacity: [0, 0.8, 1, 1, 0],
            scale: [1, 1.2, 1, 1.2, 0.8],
          }}
          transition={{
            duration: 20 + heart.delay,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          <Heart 
            className="w-full h-full" 
            fill="#FFC0CB" 
            fillOpacity={0.3}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;