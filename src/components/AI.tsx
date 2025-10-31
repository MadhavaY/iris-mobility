import { useEffect, useState } from "react";

const AI = () => {
  const slides = [
    {
      title: "Stop Sign Violation",
      img: "/images/stop-sign-violation.jpg",
      text: "Detects vehicles that fail to stop at intersections using real-time object tracking and rule-based AI detection to enhance road safety compliance.",
    },
    {
      title: "Distracted Driving",
      img: "/images/distracted-driving.jpg",
      text: "Leverages computer vision to identify distracted behavior such as mobile phone use or drowsiness, providing early alerts to prevent accidents.",
    },
    {
      title: "Failure to Yield",
      img: "/images/failure-to-yield.jpg",
      text: "Monitors traffic flow at intersections to flag vehicles that fail to yield to pedestrians or other vehicles, ensuring compliance with traffic laws.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background text-center overflow-hidden">
      <h2 className="text-5xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent">
        AI for Traffic Safety
      </h2>

      <div className="relative w-full max-w-5xl mx-auto h-[480px] overflow-hidden rounded-2xl shadow-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center px-8 space-y-6"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-semibold text-foreground">
                {slide.title}
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">{slide.text}</p>
            </div>
          ))}
        </div>

        {/* Dots (indicators) */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-primary" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AI;