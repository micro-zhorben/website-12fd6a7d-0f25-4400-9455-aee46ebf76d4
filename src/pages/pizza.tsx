import { motion } from "framer-motion";
import { Pizza as PizzaIcon } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function Pizza() {
  const { toast } = useToast();
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0);

  const handleSpinPizza = () => {
    setRotationDegrees((prev) => prev + 360);
    setPizzaCount((prev) => prev + 1);
    
    if (pizzaCount === 9) {
      toast({
        title: "Поздравляем! 🎉",
        description: "Вы раскрутили 10 пицц! Вы настоящий пиццамен!",
      });
      setPizzaCount(0);
    }
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Typography.H1 className="mb-4">
          Пицца-вечеринка! 🍕
        </Typography.H1>
        <Typography.Lead className="mb-8">
          Здесь живет самая головокружительная пицца!
        </Typography.Lead>
      </motion.div>

      <div className="flex flex-col items-center gap-8">
        <motion.div
          animate={{ rotate: rotationDegrees }}
          transition={{ 
            duration: 1,
            type: "spring",
            bounce: 0.5
          }}
          className="relative"
        >
          <PizzaIcon className="h-48 w-48 text-primary" />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Typography.H2>{pizzaCount}</Typography.H2>
          </motion.div>
        </motion.div>

        <Button
          size="lg"
          onClick={handleSpinPizza}
          className="text-foreground"
        >
          Раскрутить пиццу! 🌀
        </Button>

        <Typography.P className="max-w-md text-center">
          Нажмите на кнопку, чтобы раскрутить пиццу! Соберите 10 вращений,
          чтобы получить звание Великого Пиццамена! 🏆
        </Typography.P>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-5 gap-2"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <motion.div
              key={index}
              className={`h-4 w-4 rounded-full ${
                index < pizzaCount ? "bg-primary" : "bg-muted"
              }`}
              animate={{ scale: index < pizzaCount ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}