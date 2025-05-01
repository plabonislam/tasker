import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="text-xl font-bold">Taskify</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Customers
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary hidden md:block"
            >
              Sign In
            </Link>
            <Button>Get Started Free</Button>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
