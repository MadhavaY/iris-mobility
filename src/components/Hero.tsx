import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import bg from "../assets/photo-1.jpg"
import AI from "./AI"

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative gradient orbs */}
      {/* <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" /> */}

      <div className="absolute inset-y-0 right-0 w-1/2">
    <img
      src={bg}
      alt="Background"
      className="w-full h-full object-cover object-center opacity-90"
    />
    </div>


      {/* Content */}
      <div className="container relative z-10 px-4 py-32 flex justify-start">
        <div className={`max-w-4xl space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Enterprise-Grade AI Security</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Intelligence For</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              A Safer Tomorrow
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powered by cutting-edge AI technology, our comprehensive platform delivers real-time 
            monitoring, analytics, and encrypted security for modern traffic management.
          </p>

          {/* CTAs */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Data Points/Day</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;