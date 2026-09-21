import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

const HEADLINE_LINES = [
  ["WE", "BUILD", "DIGITAL"],
  ["PRODUCTS", "THAT", "MOVE"],
  ["BUSINESSES", "FORWARD."],
];

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.06, duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  }),
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  let wordIndex = 0;

  return (
    <section className="relative flex min-h-[92vh] w-full flex-col justify-center overflow-hidden border-b border-white/5 bg-[#060913] text-white">
      {/* Ambient technical grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.05] pointer-events-none [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,black,transparent)]" />

      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      {/* Floating blurred shapes — disabled under reduced motion */}
      {!reduceMotion && (
        <>
          <div className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-[100px] animate-float-slow" />
          <div className="pointer-events-none absolute -right-10 bottom-1/4 h-72 w-72 rounded-full bg-[#F5D76E]/5 blur-[110px] animate-float" />
        </>
      )}

      <div className="container-app relative z-10 pt-28 pb-20 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5D76E]"
        >
          <Sparkles size={12} className="text-[#D4AF37]" />
          Software Development &middot; IT Consulting &middot; Tax &amp; Compliance
        </motion.div>

        <h1 className="max-w-5xl font-serif text-[13vw] font-bold leading-[1.12] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] py-1">
          {HEADLINE_LINES.map((line, li) => (
            <span key={li} className="block">
              {line.map((word) => {
                const i = wordIndex++;
                const isLast = li === HEADLINE_LINES.length - 1 && word === line[line.length - 1];
                return (
                  <motion.span
                    key={word}
                    custom={i}
                    initial={reduceMotion ? undefined : "hidden"}
                    animate={reduceMotion ? undefined : "visible"}
                    variants={wordVariants}
                    className={`mr-4 inline-block ${
                      isLast ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent" : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            to="/case-studies"
            data-cursor="view"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#060913] shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_45px_-6px_rgba(212,175,55,0.55)]"
          >
            View Our Work
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06]"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#D4AF37]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
