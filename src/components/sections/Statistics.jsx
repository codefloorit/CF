import { motion } from "framer-motion";
import { Code2, Landmark, MapPin, CalendarClock } from "lucide-react";
import { itServices } from "../../data/itServices";
import { taxServices } from "../../data/taxServices";
import { siteConfig } from "../../data/siteConfig";

// Honest, verifiable capability figures — no invented client counts or revenue numbers.
const Statistics = () => {
  const capabilityStats = [
    { label: "IT & Software Services", value: `${itServices.length}`, icon: <Code2 size={20} /> },
    { label: "Tax & Financial Services", value: `${taxServices.length}`, icon: <Landmark size={20} /> },
    { label: "Founded", value: `${siteConfig.founded}`, icon: <CalendarClock size={20} /> },
    { label: "Based In", value: "Ahmedabad", icon: <MapPin size={20} /> },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0F1A] py-20 px-4 sm:px-6 lg:px-8 text-white w-full border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 bg-[#060913]/40">
          {capabilityStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 sm:p-8 flex flex-col justify-between min-h-[180px] border-r border-b border-white/10 last:border-r-0 lg:[&:nth-child(n+3)]:border-b-0 [&:nth-child(even)]:border-r-0 lg:[&:nth-child(even)]:border-r border-white/10 group"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors duration-300" />

              <div className="flex justify-between items-start w-full mb-6">
                <div className="p-2 border border-white/5 bg-[#0B1324]/50 text-[#F5D76E] group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                  {stat.icon}
                </div>
                <span className="font-mono text-[9px] text-white/20 tracking-widest uppercase">
                  REG // 0{i + 1}
                </span>
              </div>

              <div className="space-y-2 mt-auto">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight bg-gradient-to-r from-[#D4AF37] via-[#F5D76E] to-white bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <div className="w-6 h-[1px] bg-[#D4AF37]/40" />
                <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/50 group-hover:text-white/80 transition-colors duration-300 leading-snug">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
