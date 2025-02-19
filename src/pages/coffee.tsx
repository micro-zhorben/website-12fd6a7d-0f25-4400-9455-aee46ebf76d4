import { motion } from "framer-motion";
import { Coffee as CoffeeIcon } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Coffee() {
  const [isLoading, setIsLoading] = useState(false);
  const [coffeeLevel, setCoffeeLevel] = useState(0);

  const handleDrinkCoffee = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCoffeeLevel((prev) => Math.min(prev + 20, 100));
      setIsLoading(false);
    }, 1000);
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
          Кофейная страница! ☕
        </Typography.H1>
        <Typography.Lead className="mb-8">
          Здесь мы пьем самый глупый кофе в мире!
        </Typography.Lead>
      </motion.div>

      {isLoading ? (
        <LoadingSpinner text="Наливаем кофе..." />
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            animate={{ rotate: coffeeLevel * 3.6 }}
            transition={{ duration: 0.5 }}
          >
            <CoffeeIcon className="h-32 w-32 text-primary" />
          </motion.div>

          <div className="w-full max-w-md">
            <div className="mb-2 flex justify-between">
              <Typography.Small>Уровень бодрости</Typography.Small>
              <Typography.Small>{coffeeLevel}%</Typography.Small>
            </div>
            <div className="h-4 w-full rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${coffeeLevel}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleDrinkCoffee}
            disabled={coffeeLevel >= 100}
            className="text-foreground"
          >
            {coffeeLevel >= 100 ? "Слишком много кофе!" : "Выпить еще кофе!"}
          </Button>

          {coffeeLevel >= 100 && (
            <Typography.P className="text-center text-destructive">
              Осторожно! Критический уровень кофеина! 🚨
            </Typography.P>
          )}
        </motion.div>
      )}
    </div>
  );
}