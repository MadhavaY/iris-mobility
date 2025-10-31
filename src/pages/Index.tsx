import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Map from "@/components/Map";
import AI from '@/components/AI'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <AI/>
        <Partners/>
        <Map/>
        <CTA />
      </main>
    </div>
  );
};

export default Index;
