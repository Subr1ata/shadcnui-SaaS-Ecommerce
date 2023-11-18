import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <AspectRatio ratio={16 / 3} className="bg-muted">
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Saman Lo</h1>
          <p className="text-lg">
            Discover the latest trends and best deals on electronics, fashion,
            and more.
          </p>
          <Button variant="destructive" className="mt-5" size="sm">
            Shop Now
          </Button>
        </div>
      </div>
    </AspectRatio>
  );
}
