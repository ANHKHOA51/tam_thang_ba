import React from 'react';
import { motion } from 'framer-motion';

interface LoopyMemeProps {
  imageUrl: string;
}

const LoopyMeme: React.FC<LoopyMemeProps> = ({ imageUrl }) => {
  return (
    <motion.div
      className="bg-white p-3 rounded-lg shadow-md overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={imageUrl} 
        alt="Hải Ly Loopy Meme" 
        className="w-full h-48 object-cover rounded"
      />
      <motion.div 
        className="mt-2 text-center text-pink-500 font-medium text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
      </motion.div>
    </motion.div>
  );
};

export default LoopyMeme;