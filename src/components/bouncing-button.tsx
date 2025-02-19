import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

interface BouncingButtonProps extends ButtonProps {
  bouncingText: string;
}

export function BouncingButton({ bouncingText, ...props }: BouncingButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.div
      animate={
        isAnimating
          ? {
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }
          : undefined
      }
      transition={{ duration: 0.5 }}
    >
      <Button
        {...props}
        className="text-foreground"
        onMouseEnter={() => setIsAnimating(true)}
        onMouseLeave={() => setIsAnimating(false)}
      >
        {bouncingText}
      </Button>
    </motion.div>
  );
}