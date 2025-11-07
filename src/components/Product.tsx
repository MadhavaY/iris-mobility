import { Shield, Cpu, Zap, Radio, Sun } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Header";

const Products = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Sleek & Modern Hardware",
      desc: "Painless 1-week installation – no power or utility permissions needed.",
    },
    {
      icon: <Sun className="w-12 h-12 text-primary" />,
      title: "Solar Powered",
      desc: "Sustains winter storms and snow without issues.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "Edge AI Processing",
      desc: "On-device AI processing enables versatility of detections on the device itself.",
    },
    {
      icon: <Radio className="w-12 h-12 text-primary" />,
      title: "5G Connected",
      desc: "Enables real-time hardware & safety reports, with instant data upload.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Unprecedented AI Capabilities",
      desc: "AI can detect a wide variety of reckless behavior with a single camera.",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      <Navbar />
      <section ref={containerRef} className="relative overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold max-w-4xl text-black leading-tight">
            We combine thoughtful hardware design with cutting-edge AI to help communities stay safe.
          </h2>
        </motion.div>

        {/* Parallax sections */}
        <motion.div style={{ y }} className="relative">
          {features.map((f, i) => (
            <section
              key={i}
              className="h-screen flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-background to-muted"
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <div className="mb-6 flex justify-center">{f.icon}</div>
                <h3 className="text-3xl font-semibold mb-4">{f.title}</h3>
                <p className="text-lg text-muted-foreground">{f.desc}</p>
              </motion.div>
            </section>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Products;