import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

interface LoadingSpinnerProps {
  text?: string;
}

export function LoadingSpinner({ text = "Загрузка..." }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent"
      />
      <Typography.P>{text}</Typography.P>
    </div>
  );
}