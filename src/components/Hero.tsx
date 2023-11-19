import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="hidden min-[450px]:block">
      <AspectRatio ratio={16 / 3} className="bg-muted">
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl md:mb-4 font-bold">
              Welcome to Saman Lo
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-1">
              <div className="col-span-2 sm:col-span-2 hidden sm:flex justify-center items-center">
                <p className="text-xs md:text-sm lg:text-lg xl:text-xl">
                  Discover the latest trends and best deals on electronics,
                  fashion, and more.
                </p>
              </div>
              <div className="col-span-2 sm:col-span-2 flex justify-center items-center">
                <Button
                  variant="destructive"
                  className="mb-2 sm:mt-1 md:mt-3 lg:mt-4 xl:mt-5"
                  size="sm"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}
