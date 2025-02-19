import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { BouncingButton } from "@/components/bouncing-button";

interface SillyCardProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export function SillyCard({ 
  title, 
  content, 
  buttonText, 
  onButtonClick 
}: SillyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="w-[300px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <Typography.H3>{title}</Typography.H3>
        </CardHeader>
        <CardContent>
          <motion.div
            animate={{
              rotate: isHovered ? [0, 5, -5, 5, -5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Typography.P>{content}</Typography.P>
          </motion.div>
        </CardContent>
        <CardFooter>
          <BouncingButton
            variant="outline"
            bouncingText={buttonText}
            onClick={onButtonClick}
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}