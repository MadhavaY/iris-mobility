import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "./Header";

const Section = ({ title, faqs }) => (
  <section className="py-16 border-b border-border/40">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-foreground mb-10 text-center">
        {title}
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-card/40 border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-foreground">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <p className="text-muted-foreground mt-3">{a}</p>}
    </div>
  );
};

const IrisFAQ = () => {
  const sections = [
    {
      title: "About Our Technology",
      faqs: [
        {
          q: "How does Iris Mobility’s system detect violations or threats?",
          a: "Our AI-powered cameras use advanced computer vision models running directly on the NVIDIA Jetson platform. They can instantly identify and analyze behaviors such as speeding, stop sign violations, illegal entries, and unauthorized vehicle movements in real time.",
        },
        {
          q: "What types of violations or safety events can Iris detect?",
          a: "Our system can detect stop sign and red-light violations, speeding, crosswalk violations, illegal turns, unauthorized gate entries, and parking violations. For community zones, we can also monitor suspicious activities and vehicle dwell times.",
        },
        {
          q: "Do Iris Mobility cameras work in all weather and lighting conditions?",
          a: "Yes. Each device is equipped with high-dynamic-range Sony imaging sensors and infrared night vision. Whether it’s rain, fog, or low light — the system maintains accurate detection and clarity 24/7.",
        },
        {
          q: "Is the system real-time or delayed?",
          a: "All processing happens in real-time at the edge — meaning our cameras analyze footage instantly, send alerts, and log events with minimal latency. Critical notifications reach enforcement dashboards within seconds.",
        },
        {
          q: "Does the system require complex installation or city infrastructure?",
          a: "No. Our systems are compact, solar-powered, and LTE-enabled. They’re designed for rapid deployment — no underground cabling or power lines needed — making them perfect for HOAs, gated communities, and schools.",
        },
      ],
    },
    {
      title: "Data Privacy and Security",
      faqs: [
        {
          q: "Do Iris Mobility cameras constantly record everyone?",
          a: "Absolutely not. Our technology is built on a privacy-first architecture. It only focuses on violations or security events — not compliant drivers or pedestrians. Routine movement is ignored and never stored.",
        },
        {
          q: "What happens to the data once it’s captured?",
          a: "Data related to violations or incidents is encrypted, securely stored, and shared only with authorized enforcement or community partners. Non-violation footage is automatically discarded after a short retention period.",
        },
        {
          q: "Does Iris Mobility use facial recognition?",
          a: "No, never. Our systems recognize vehicles — not people. Identification is based solely on license plates and behavioral context, ensuring ethical and non-intrusive enforcement.",
        },
        {
          q: "Can individuals access collected data?",
          a: "No personal or identifying data is ever made public. Cities and authorized entities may access anonymized, aggregated insights for safety analysis, but personal details are protected and restricted.",
        },
        {
          q: "How do you protect against cybersecurity threats?",
          a: "We use military-grade encryption, regular third-party security audits, and encrypted cloud communication protocols. Our systems are designed to comply with strict data protection standards (GDPR, CCPA).",
        },
      ],
    },
    {
      title: "Enforcement and Impact",
      faqs: [
        {
          q: "What types of enforcement methods does Iris Mobility support?",
          a: "We provide flexible options — from real-time alerts and message board feedback to automated violation processing integrated with local enforcement workflows.",
        },
        {
          q: "Is the goal of your system to generate revenue from fines?",
          a: "No. Our mission is to reduce violations, not profit from them. Iris Mobility is focused on proactive safety, education, and prevention. Ticketing is only used as a last resort for repeat or serious offenders.",
        },
        {
          q: "How effective are your systems at improving community safety?",
          a: "In pilot deployments, Iris Mobility’s systems have reduced dangerous driving behaviors by over 50% within the first few months. Communities see measurable improvements almost immediately after installation.",
        },
        {
          q: "Do your systems replace human officers or security guards?",
          a: "No — we complement them. Iris Mobility automates repetitive, high-risk monitoring tasks, freeing officers and guards to focus on more critical human-centered safety operations.",
        },
        {
          q: "How soon can communities expect to see results?",
          a: "Results are visible within weeks of deployment — from fewer violations to improved driver awareness. Long-term, communities also benefit from data-driven decision-making for safer infrastructure planning.",
        },
      ],
    },
    {
      title: "Community and Transparency",
      faqs: [
        {
          q: "How do residents know when systems are deployed in their area?",
          a: "We prioritize transparency. Each installation is announced publicly, marked with clear signage, and communicated through city or community portals before activation.",
        },
        {
          q: "Can communities decide where cameras are placed?",
          a: "Yes. We actively involve residents and local authorities in identifying high-risk zones. Community input drives deployment to ensure we’re solving real safety problems where they matter most.",
        },
        {
          q: "How can someone contest a violation issued by Iris Mobility’s system?",
          a: "Every enforcement notice includes clear appeal instructions in accordance with local regulations. We ensure every case is reviewable and that fair due process is upheld.",
        },
        {
          q: "Do first-time violators receive warnings instead of tickets?",
          a: "Yes. Our configurable system can issue digital or physical warnings first — encouraging behavior correction before any fines are considered.",
        },
        {
          q: "How can a community or city partner with Iris Mobility?",
          a: "Reach out to our partnerships team via irismobility.ai/contact",
        },
      ],
    },
  ];

  return (
    <>
    <Navbar/>
    <main className="bg-background text-foreground min-h-screen">
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Iris Mobility FAQ</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how our technology improves safety, respects privacy, and
          empowers communities.
        </p>
      </div>

      {sections.map((section, i) => (
        <Section key={i} title={section.title} faqs={section.faqs} />
      ))}
    </main>
    </>
  );
};

export default IrisFAQ;
