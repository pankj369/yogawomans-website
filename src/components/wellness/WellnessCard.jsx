/**
 * WellnessCard Component
 * Displays individual wellness category cards with hover animations
 * Features: Glassmorphism design, smooth animations, responsive layout
 */

import { motion } from "framer-motion";

const WellnessCard = ({ category, isActive, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative
        group
        cursor-pointer
        overflow-hidden
        rounded-2xl
        p-6
        backdrop-blur-md
        border
        transition-all
        duration-300
        ${
          isActive
            ? `border-white/40 bg-white/30 shadow-2xl ring-2 ring-white/50`
            : `border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20 hover:shadow-xl`
        }
      `}
    >
      {/* Gradient Background */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${category.color}
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-10
          -z-10
        `}
      />

      {/* Floating animated background blob */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`
          absolute
          -top-8
          -right-8
          h-32
          w-32
          rounded-full
          bg-gradient-to-br
          ${category.color}
          opacity-0
          blur-2xl
          group-hover:opacity-20
          transition-opacity
          duration-300
          -z-10
        `}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          animate={isActive ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1.2, 1] } : {}}
          transition={{ duration: 0.6, repeat: isActive ? Infinity : 0, repeatDelay: 2 }}
          className="mb-3 text-4xl"
        >
          {category.icon}
        </motion.div>

        {/* Label */}
        <h3 className="mb-2 font-bold text-gray-800 text-lg">{category.label}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 flex items-center gap-2 text-xs font-semibold text-green-600"
          >
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Selected
          </motion.div>
        )}
      </div>

      {/* Border shimmer effect on hover */}
      <div
        className={`
          absolute
          inset-0
          rounded-2xl
          border
          border-transparent
          bg-gradient-to-r
          from-white/20
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
        `}
      />
    </motion.div>
  );
};

export default WellnessCard;
