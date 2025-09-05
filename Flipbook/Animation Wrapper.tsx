import { motion, AnimatePresence } from "framer-motion";

interface AnimationWrapperProps {
  isActive: boolean;
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  effect?: "fade" | "bounce" | "typewriter" | "shimmer";
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  isActive,
  children,
  stagger = 0.15,
  delay = 0,
  direction = "up",
  effect = "fade"
}) => {
  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 }
  };

  // Effect presets
  const effectVariants: Record<string, any> = {
    fade: {
      initial: { opacity: 0, ...directionMap[direction] },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, ...directionMap[direction] }
    },
    bounce: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
      exit: { opacity: 0, scale: 0.8 }
    },
    typewriter: {
      initial: { opacity: 0, width: 0 },
      animate: { opacity: 1, width: "auto", transition: { duration: 1.2, ease: "easeInOut" } },
      exit: { opacity: 0, width: 0 }
    },
    shimmer: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        background: "linear-gradient(90deg, #ecebe3 0%, #f9f9f9 50%, #ecebe3 100%)",
        backgroundSize: "200% 100%",
        transition: { duration: 1.2, repeat: 1 }
      },
      exit: { opacity: 0 }
    }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={effectVariants[effect].initial}
          animate={effectVariants[effect].animate}
          exit={effectVariants[effect].exit}
          transition={{ duration: 0.6, delay }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: stagger, delayChildren: delay }
              }
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
