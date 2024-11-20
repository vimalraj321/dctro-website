import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex items-center h-full justify-center min-h-[60vh]">
          <div className="flex flex-col items-center space-y-4 text-center h-full justify-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Empowering Your Business, Elevating Your Impact
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Innovative IT services and products tailored for both B2B and
                B2C. We turn your challenges into triumphs with solutions that
                set you apart.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
        )}
      />
    </section>
  );
};
