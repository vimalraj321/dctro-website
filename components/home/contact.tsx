import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Contact = () => {
  return (
    <section
      id="cta"
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Let&apos;s discuss how our IT services can drive your success.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By subscribing, you agree to our Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
