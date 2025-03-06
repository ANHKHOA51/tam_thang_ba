import React from 'react';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';

interface WishButtonProps {
  onClick: () => void;
}

const WishButton: React.FC<WishButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-md flex items-center gap-2 transition-all"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Gift className="h-5 w-5" />
      <span>Hoa & Lời Chúc</span>
    </motion.button>
  );
};

export default WishButton;