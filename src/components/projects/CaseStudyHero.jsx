import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Breadcrumb from "../common/Breadcrumb";
import ProjectMockup from "./ProjectMockup";
import { projectCategories } from "../../data/projects";

const categoryLabel = (id) => projectCategories.find((c) => c.id === id)?.label || id;

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  }),
};

const CaseStudyHero = ({ project }) => {
  const words = project.title.split(" ");

  const meta = [
    { label: "Industry", value: project.industry },
    { label: "Category", value: categoryLabel(project.category) },
    { label: "Year", value: project.year || "TBD" },
    { label: "Status", value: project.status },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#060913] pb-16 pt-14 sm:pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Our Work", path: "/case-studies" }, { label: project.title }]} />

        <div className="mt-8 max-w-4xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#F5D76E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            {project.client ? project.client : "Case Study"}
          </span>

          <h1 className="flex flex-wrap gap-x-3 text-4xl font-serif font-bold leading-[1.1] tracking-wide text-white sm:text-6xl">
            {words.map((word, i) => (
              <motion.span key={i} custom={i} initial="hidden" animate="visible" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {project.tagline}
          </motion.p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F5D76E] hover:underline"
            >
              Visit live project <ExternalLink size={14} />
            </a>
          )}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 border-y border-white/10 py-6 sm:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-white/85">{item.value}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mt-14"
        >
          <ProjectMockup
            type={project.mockup}
            image={project.image}
            title={project.title}
            wip={project.status === "In progress"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
