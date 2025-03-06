import React from 'react';
import { motion } from 'framer-motion';

const RoseFlower: React.FC = () => {
  return (
    <motion.svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 512 512" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.path 
        d="M196.786,357.748C83.906,553.262-87.718,256,138.042,256c-225.761,0-54.136-297.262,58.744-101.747
        c-112.881-195.515,230.368-195.515,117.487,0C427.154-41.262,598.779,256,373.018,256c225.761,0,54.136,297.262-58.744,101.748
        C427.154,553.262,83.906,553.262,196.786,357.748z"
        fill="#FF728B"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      />
      <motion.path 
        d="M373.018,255.858l-114.488-1.54l0.057-0.095l-0.092,0.002l55.78-99.971
        c112.881-195.515-230.368-195.515-117.487,0l55.788,99.985l-0.107-0.001l0.057,0.095l-114.48,2.059
        c-225.759,0.749-53.15,297.439,59.081,101.552l58.361-98.486l0.045,0.08l0.053-0.094l58.815,98.234
        C427.515,553.054,598.779,255.585,373.018,255.858z"
        fill="#FF3F62"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
      />
      <motion.circle 
        cx="255.711" 
        cy="255.997" 
        r="59.308"
        fill="#FFEB99"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />
      <motion.path 
        d="M226.465,256c0-27.56,18.801-50.725,44.275-57.381c-4.801-1.255-9.838-1.927-15.033-1.927
        c-32.755,0-59.308,26.553-59.308,59.308s26.553,59.308,59.308,59.308c5.195,0,10.231-0.672,15.033-1.927
        C245.265,306.725,226.465,283.561,226.465,256z"
        fill="#FFDA44"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </motion.svg>
  );
};

export default RoseFlower;