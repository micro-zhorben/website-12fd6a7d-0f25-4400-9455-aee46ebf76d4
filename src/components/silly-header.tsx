import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Home, Coffee, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";

export function SillyHeader() {
  const [isWobbling, setIsWobbling] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          animate={{ rotate: isWobbling ? [0, -10, 10, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground"
            onMouseEnter={() => setIsWobbling(true)}
            onMouseLeave={() => setIsWobbling(false)}
          >
            <Sparkles className="h-6 w-6" />
            <Typography.H3>Самый глупый сайт</Typography.H3>
          </Link>
        </motion.div>

        <nav className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="text-foreground">
              <Home className="mr-2 h-4 w-4" />
              Домой
            </Button>
          </Link>
          <Link to="/coffee">
            <Button variant="ghost" className="text-foreground">
              <Coffee className="mr-2 h-4 w-4" />
              Кофе
            </Button>
          </Link>
          <Link to="/pizza">
            <Button variant="ghost" className="text-foreground">
              <Pizza className="mr-2 h-4 w-4" />
              Пицца
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}