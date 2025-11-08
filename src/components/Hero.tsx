import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import bg from "../assets/photo-1.jpg";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, suffix = "", duration = 2 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000000) return "1M+";
    if (latest >= 1000) return `${Math.floor(latest / 1000)}k`;
    return Math.floor(latest) + suffix;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const SlideNumber = ({ from, to, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const duration = 3000;
    let animationFrameId;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(from + (to - from) * easeOutQuart);
      setCurrent(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [inView, from, to, delay]);

  return (
    <div
      ref={ref}
      className="inline-block overflow-hidden align-bottom"
      style={{ height: "3rem", minWidth: "1ch" }}
    >
      <motion.div
        key={current}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="text-3xl md:text-4xl font-bold text-primary leading-none"
      >
        {current}
      </motion.div>
    </div>
  );
};

const StepCounter = ({ steps, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let currentIndex = 0;
    const timeoutIds = [];

    const animateSteps = () => {
      if (currentIndex < steps.length) {
        setCurrentStep(currentIndex);
        currentIndex++;
        const timeoutId = setTimeout(animateSteps, 300);
        timeoutIds.push(timeoutId);
      }
    };

    const startId = setTimeout(animateSteps, delay);
    timeoutIds.push(startId);

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [inView, steps, delay]);

  return (
    <div
      ref={ref}
      className="inline-block overflow-hidden align-bottom"
      style={{ height: "3rem", minWidth: "3ch" }}
    >
      <motion.div
        key={currentStep}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-primary leading-none"
      >
        {steps[currentStep] || steps[steps.length - 1]}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      <div className="container relative z-10 px-4 py-32 flex justify-start">
        <div
          className={`max-w-4xl space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Enterprise-Grade AI Security
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Intelligence For</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              A Safer Tomorrow
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powered by cutting-edge AI technology, our comprehensive platform
            delivers real-time monitoring, analytics, and encrypted security for
            modern traffic management.
          </p>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <Counter from={0} to={99.9} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary flex justify-center gap-1">
                <SlideNumber from={1} to={24} delay={0.2} />/
                <SlideNumber from={1} to={7} delay={0.4} />
              </div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <Counter from={1000} to={1000000} />
              </div>
              <div className="text-sm text-muted-foreground">
                Data Points/Day
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
