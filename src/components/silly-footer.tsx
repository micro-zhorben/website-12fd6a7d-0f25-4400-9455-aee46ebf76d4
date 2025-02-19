import { Heart } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function SillyFooter() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container flex flex-col items-center gap-4">
        <Typography.P className="flex items-center gap-2">
          Сделано с
          <Heart className="h-4 w-4 text-destructive" />
          и весельем
        </Typography.P>
        <Typography.Small>
          © {new Date().getFullYear()} Самый глупый сайт в мире
        </Typography.Small>
      </div>
    </footer>
  );
}