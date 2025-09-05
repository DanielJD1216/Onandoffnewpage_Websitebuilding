import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface AnimationWrapperProps {
  isActive: boolean;
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  effect?: 'fade' | 'bounce' | 'typewriter' | 'shimmer';
  className?: string;
}

const JourneyAnimationWrapper: React.FC<AnimationWrapperProps> = ({
  isActive,
  children,
  stagger = 0.1,
  delay = 0,
  direction = 'up',
  effect = 'fade',
  className = ''
}) => {
  const getVariants = (): Variants => {
    const directionOffsets = {
      left: { x: -50, y: 0 },
      right: { x: 50, y: 0 },
      up: { x: 0, y: -30 },
      down: { x: 0, y: 30 }
    };

    const offset = directionOffsets[direction];

    switch (effect) {
      case 'fade':
        return {
          hidden: {
            opacity: 0,
            ...offset
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 0.6,
              delay: delay,
              ease: [0.6, -0.05, 0.01, 0.99]
            }
          },
          exit: {
            opacity: 0,
            ...offset,
            transition: {
              duration: 0.3
            }
          }
        };

      case 'bounce':
        return {
          hidden: {
            opacity: 0,
            scale: 0.3,
            ...offset
          },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: {
              type: 'spring',
              damping: 20,
              stiffness: 300,
              delay: delay
            }
          },
          exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
              duration: 0.2
            }
          }
        };

      case 'typewriter':
        return {
          hidden: {
            width: 0,
            opacity: 0
          },
          visible: {
            width: 'auto',
            opacity: 1,
            transition: {
              width: {
                duration: 1.5,
                delay: delay,
                ease: 'easeInOut'
              },
              opacity: {
                duration: 0.1,
                delay: delay
              }
            }
          },
          exit: {
            width: 0,
            opacity: 0,
            transition: {
              duration: 0.3
            }
          }
        };

      case 'shimmer':
        return {
          hidden: {
            opacity: 0,
            backgroundPosition: '-200% 0'
          },
          visible: {
            opacity: 1,
            backgroundPosition: '200% 0',
            transition: {
              opacity: {
                duration: 0.3,
                delay: delay
              },
              backgroundPosition: {
                duration: 2,
                delay: delay + 0.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop'
              }
            }
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.3
            }
          }
        };

      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay } },
          exit: { opacity: 0 }
        };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const shimmerStyle = effect === 'shimmer' ? {
    background: 'linear-gradient(90deg, transparent, rgba(164, 130, 66, 0.4), transparent)',
    backgroundSize: '200% 100%',
  } : {};

  const typewriterStyle = effect === 'typewriter' ? {
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
  } : {};

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          variants={React.Children.count(children) > 1 ? containerVariants : getVariants()}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={className}
          style={{
            ...shimmerStyle,
            ...typewriterStyle
          }}
        >
          {React.Children.count(children) > 1 ? (
            React.Children.map(children, (child, index) => (
              <motion.div
                key={index}
                variants={getVariants()}
                style={effect === 'shimmer' ? shimmerStyle : {}}
              >
                {child}
              </motion.div>
            ))
          ) : (
            children
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JourneyAnimationWrapper;