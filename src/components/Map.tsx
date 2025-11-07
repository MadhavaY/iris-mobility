import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import maps from "../assets/maps.png";

const Map = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
   <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center p-4">All the Stop Signs in Dallas</h2>
        <div className="text-center">
          <img
            src={maps}
            className="w-full max-w-none h-auto object-cover rounded-2xl"
            alt="Map"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
