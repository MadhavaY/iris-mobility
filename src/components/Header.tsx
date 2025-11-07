import { Button } from "@/components/ui/button";
import { Menu, Shield } from "lucide-react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-2xl px-6 py-4 rounded-full">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <span className="text-4xl font-bold text-foreground">
              Iris Mobility
            </span>
          </div>
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center text-black gap-8 px-6 py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20">
            <Link
              to="/product"
              className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              Product
            </Link>
             <Link
              to="/solutions"
              className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              Solutions
            </Link>
            <a
              href="/faq"
              className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
