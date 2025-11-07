import { Shield, Brain, Camera, Gauge, Eye, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: "Encrypted Security",
    description: "Military-grade encryption ensures your data remains secure and protected at all times with end-to-end security protocols.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms provide real-time insights and predictive analytics for proactive traffic management.",
  },
  {
    icon: Camera,
    title: "License Plate Recognition",
    description: "State-of-the-art OCR technology with 99.8% accuracy for instant vehicle identification and tracking capabilities.",
  },
  {
    icon: Gauge,
    title: "Speed Check Camera",
    description: "Precision speed detection with automated enforcement capabilities and seamless integration with existing infrastructure.",
  },
  {
    icon: Eye,
    title: "24/7 Live Monitoring",
    description: "Round-the-clock surveillance with intelligent alert systems and instant incident detection for maximum security coverage.",
  },
  {
    icon: Cpu,
    title: "Proprietary OS",
    description: "Custom-built operating system optimized for performance, reliability, and seamless integration with all system components.",
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="container mx-auto">
        {/* Section header */}
        <div 
  ref={headerRef}
  className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${
    headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
    Comprehensive AI Solutions
  </h2>
  <p className="text-lg text-muted-foreground">
    Everything you need to build a smarter, safer traffic management system
  </p>
</div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-700 hover:shadow-[var(--shadow-card)] group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
