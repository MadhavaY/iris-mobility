import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Transform Your Traffic Management?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join leading organizations using our AI-powered platform to create
            safer, smarter cities with real-time monitoring and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSerqMzGQTGVigplunO33GPxgF4MMcP1ylfQNFsBBrzkpKaKJA/viewform?usp=header"
            >
              <Button variant="hero" size="xl" className="group">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSerqMzGQTGVigplunO33GPxgF4MMcP1ylfQNFsBBrzkpKaKJA/viewform?usp=header"
            >
              <Button variant="outline" size="xl">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
