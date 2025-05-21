import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedBalls from "./AnimatedBalls";
import TaskDashboardAnimation from "./TaskAnimation";
function HeroContent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-50 to-background overflow-hidden relative">
      <div className="container px-4 md:px-6 relative">
        <AnimatedBalls />
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
          <div className="flex items-center justify-center relative">
            <TaskDashboardAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroContent;
