import React from 'react';
import { Flower } from 'lucide-react';
import { motion } from 'framer-motion';

interface FlowerButtonProps {
  onClick: () => void;
}

const FlowerButton: React.FC<FlowerButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      className="bg-pink-100 hover:bg-pink-200 text-pink-600 font-semibold py-3 px-6 rounded-full shadow-md flex items-center gap-2 transition-all"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Flower className="h-5 w-5" />
      <span>Bông Hoa Cho Em</span>
    </motion.button>
  );
};

export default FlowerButton;