import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Map = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" /> */}

      <div className="container mx-auto relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Place Holder for Map
          </h2>
          
          
        </div>
      </div>
    </section>
  );
};

export default Map;
