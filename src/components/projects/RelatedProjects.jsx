import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";

const RelatedProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <section className="relative border-b border-white/5 bg-[#0A0F1A] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="✦ MORE WORK" title="Related projects" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} size="small" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
