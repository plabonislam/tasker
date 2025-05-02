import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

function HeroContent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-violet-50 to-background overflow-hidden relative">
      <div className="container px-4 md:px-6 relative">
        <div className="absolute bottom-20 left-[15%] w-6 h-6 bg-green-400 rounded-full opacity-70 animate-float " />
        <div className="absolute top-1 left-[10%] w-10 h-10 bg-primary opacity-20 rounded-full  animate-float" />
        <div className="absolute bottom-20 right-[60%] w-12 h-12 bg-blue-300 opacity-50 rounded-full animate-parallax" />
        <div className="absolute top-20 right-[70%] w-8 h-8 bg-yellow-300 rounded-full opacity-70  animate-parallax" />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Simplify, Organize & Achieve
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Before diving into execution, master your workflow with a proven
                task management system.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12"
                />
                <Button type="submit" className="h-12">
                  <span className="hidden sm:inline-block">Get Started</span>
                  <ArrowRight className="h-4 w-4 sm:ml-2" />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative" />
        </div>
      </div>
    </section>
  );
}
export default HeroContent;
