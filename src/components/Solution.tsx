import {
  Activity,
  AlertTriangle,
  Users,
  Car,
  Camera,
  Gauge,
  Siren,
} from "lucide-react";
import Navbar from "./Header";

const Solutions = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-background text-foreground py-24 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6  max-w-3xl">
          We partner with municipalities to build a culture of safety in their
          communities.
        </h2>

        <div className="max-w-6xl mt-20 text-left">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Activity className="w-7 h-7 text-primary" /> Measure
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Data & insights into reckless driving behavior. No more waiting for
            crashes before taking action. Our technology allows you to detect
            unsafe behaviors before tragedy strikes.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <AlertTriangle className="w-6 h-6 text-primary" />,
                text: "Distracted driving",
              },
              {
                icon: <Car className="w-6 h-6 text-primary" />,
                text: "Stop sign running",
              },
              {
                icon: <Siren className="w-6 h-6 text-primary" />,
                text: "Red light violations",
              },
              {
                icon: <Gauge className="w-6 h-6 text-primary" />,
                text: "Speeding",
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                text: "Crosswalk violations",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center gap-4"
              >
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ENGAGE */}
        <div className="max-w-6xl mt-24 text-left">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Users className="w-7 h-7 text-primary" /> Engage
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Turn awareness into community action. If we do it together, we can
            make a difference.
          </p>

          <ul className="grid md:grid-cols-3 gap-6">
            {[
              "Community dashboards & yard signs",
              "Smart warning letters with video proof",
              "LED driver feedback signs",
            ].map((text, i) => (
              <li
                key={i}
                className="p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* ENFORCE */}
        <div className="max-w-6xl mt-24 text-left">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Camera className="w-7 h-7 text-primary" /> Enforce
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Use technology to create deterrence against reckless behavior.
            Enforcement plays a critical role — let’s be smarter about it.
          </p>

          <ul className="grid md:grid-cols-3 gap-6">
            {[
              "Strategic deployment of traffic patrol",
              "Live-stream patrol to support an officer during patrol",
              "Community-focused automated enforcement for when officers aren’t around",
            ].map((text, i) => (
              <li
                key={i}
                className="p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Solutions;
