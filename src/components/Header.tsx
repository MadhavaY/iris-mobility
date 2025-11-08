import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-2xl px-6 py-4 rounded-full">
            <div className="w-12 h-auto mt-2 rounded-lg flex items-center justify-center">
              {/* <Shield className="w-5 h-5 text-background" /> */}
              <img className="rounded-full" src={logo}/>
            </div>
            <span className="text-4xl font-bold text-foreground">
              Iris Mobility
            </span>
          </div>
          </Link>

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
            <Link
              to="/faq"
              className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSerqMzGQTGVigplunO33GPxgF4MMcP1ylfQNFsBBrzkpKaKJA/viewform?usp=header"
              target="_blank" className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden mt-2 bg-white/10 backdrop-blur-2xl rounded-2xl p-4 border border-white/20 flex flex-col space-y-3"
            >
              <Link
                to="/product"
                className="text-sm font-medium text-black hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                to="/solutions"
                className="text-sm font-medium text-black hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/faq"
                className="text-sm font-medium text-black hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSerqMzGQTGVigplunO33GPxgF4MMcP1ylfQNFsBBrzkpKaKJA/viewform?usp=header"
                target="_blank"
                className="text-sm font-medium text-black hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
