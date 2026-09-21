import { Target, Eye, Heart, Rocket, Award as AwardIcon } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";
import CTA from "../../components/sections/CTA";
import { siteConfig } from "../../data/siteConfig";
import { awards } from "../../data/testimonials";

const values = [
  { icon: Target, title: "Precision", desc: "Every filing, every line of code — checked, reviewed, and delivered right the first time." },
  { icon: Heart, title: "Integrity", desc: "Transparent pricing and honest timelines, even when the honest answer isn't the easy one." },
  { icon: Rocket, title: "Momentum", desc: "We measure success by how fast our clients can move once we're out of their way." },
  { icon: AwardIcon, title: "Craft", desc: "We take pride in work that holds up — technically, legally, and aesthetically." },
];

const journey = [
  { year: siteConfig.founded, title: "Codefloor is founded", desc: "Started as a two-person tax consultancy in Ahmedabad." },
  { year: 2025,title: "IT division launches", desc: "Added web and app development to serve existing clients end-to-end." },
  { year: 2025,title: "50+th client milestone", desc: "Crossed 50+ active retainer clients across IT and tax services." },
  { year: 2025,title: "120+ projects delivered", desc: "Serving clients across 25+ cities with a 10-person team." },
];

const AboutUs = () => {
  return (
    <div className="bg-[#060913] text-white overflow-hidden w-full">
      
      {/* Premium Luxury Configured PageHero */}
      <PageHero
        eyebrow="THE SOVEREIGN CHARTER"
        title="Built by people who've sat on both sides of the table."
        description="We started as a tax consultancy frustrated by disconnected IT vendors — so we built the IT team ourselves."
        breadcrumbItems={[{ label: "About", path: "/about" }, { label: "About Us" }]}
      />

      {/* Introduction Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#060913]">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative z-10">
          <Reveal direction="left" className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">✦ ESTABLISHED ARCHITECTURE</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-wide text-white">Who we are</h2>
            </div>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">{siteConfig.description}</p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal border-l-2 border-[#D4AF37]/40 pl-4 bg-white/[0.01] py-2">
              Today, Codefloor operates as two tightly coordinated practices under one company —
              our development, design, and marketing teams build and grow your digital presence,
              while our Chartered Accountants and Company Secretaries keep your business legally
              and financially sound. Clients get one point of contact instead of five vendors.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <Reveal delay={0.1} className="relative bg-[#0A0F1A] border border-white/5 p-6 group transition-all hover:border-[#D4AF37]/30 shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
              <Target size={22} className="text-[#F5D76E] mb-4 bg-[#0B1220] p-1 box-content border border-white/10" />
              <h3 className="font-serif font-bold text-lg text-white mb-2 tracking-wide">Mission</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                Give growing businesses enterprise-grade technology and compliance without
                enterprise overhead.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="relative bg-[#0A0F1A] border border-white/5 p-6 group transition-all hover:border-[#D4AF37]/30 shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37]" />
              <Eye size={22} className="text-[#F5D76E] mb-4 bg-[#0B1220] p-1 box-content border border-white/10" />
              <h3 className="font-serif font-bold text-lg text-white mb-2 tracking-wide">Vision</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                To be India's most trusted single partner for business technology and financial
                compliance.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ CORPORATE COMPASS" title="What guides how we work" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="relative bg-[#060913] border border-white/5 p-6 h-full text-center group transition-all hover:border-[#D4AF37]/30 shadow-2xl">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]" />
                  <span className="inline-flex h-12 w-12 items-center justify-center bg-[#0A0F1A] border border-white/10 text-[#F5D76E] mb-5 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                    <v.icon size={22} />
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white mb-3 tracking-wide group-hover:text-[#F5D76E] transition-colors">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060913] border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ CHRONICLE METRICS" title="A decade of growing alongside our clients" />
          
          <div className="mt-20 max-w-3xl mx-auto relative">
            {journey.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08} direction="left">
                <div className="flex gap-6 pb-12 last:pb-0 relative group">
                  {i !== journey.length - 1 && (
                    <span className="absolute left-[27px] top-14 bottom-0 w-[1px] bg-dashed border-l border-white/10 group-hover:border-[#D4AF37]/30 transition-colors" />
                  )}
                  <span className="flex-shrink-0 flex h-14 w-14 items-center justify-center bg-[#0A0F1A] border border-[#D4AF37]/40 font-mono text-xs font-bold text-[#F5D76E] shadow-xl group-hover:bg-[#D4AF37] group-hover:text-[#060913] transition-all duration-300">
                    {item.year}
                  </span>
                  <div className="pt-2 bg-white/[0.01] border border-white/5 hover:border-white/10 p-5 w-full transition-all">
                    <h3 className="font-serif font-bold text-white text-base tracking-wide">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Awards Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1A] border-b-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="✦ HONOUR LAURELS" title="Recognition along the way" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="relative bg-[#060913] border border-white/5 p-6 h-full group transition-all hover:border-[#D4AF37]/30 shadow-xl flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]" />
                  <div>
                    <AwardIcon size={20} className="text-[#F5D76E] mb-4 bg-[#0A0F1A] p-1 box-content border border-white/10" />
                    <h3 className="font-serif font-bold text-white text-sm mb-2 leading-snug tracking-wide group-hover:text-[#F5D76E] transition-colors">{a.title}</h3>
                  </div>
                  <p className="text-[10px] font-mono text-white/40 tracking-wider uppercase pt-4 border-t border-white/5 mt-4">
                    {a.org} &bull; {a.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Global Ecosystem CTA Block */}
      <CTA />
    </div>
  );
};

export default AboutUs;