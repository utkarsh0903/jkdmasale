// Animation variants for Framer Motion
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
