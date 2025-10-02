import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AlertProps {
  type: "success" | "danger";
  text: string;
}

const Alert: React.FC<AlertProps> = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center w-full max-w-xs bottom-5 left-1/2 transform -translate-x-1/2 md:max-w-md md:bottom-8"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`flex items-center w-full p-4 rounded-lg shadow-lg ${
            type === "danger" ? "bg-red-800" : "bg-emerald-600"
          } text-white`}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 ${
              type === "danger" ? "bg-red-500" : "bg-lime-500"
            }`}
          >
            {type === "danger" ? "X" : "✔"}
          </div>
          <p className="flex-1 text-sm font-medium">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
