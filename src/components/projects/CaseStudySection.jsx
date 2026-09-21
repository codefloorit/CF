import Reveal from "../common/Reveal";

// Editorial section wrapper used across the case-study detail page.
// index: used for the mono step counter in the corner.
const CaseStudySection = ({ index, eyebrow, title, children, tone = "primary" }) => {
  const bg = tone === "primary" ? "bg-[#060913]" : "bg-[#0A0F1A]";

  return (
    <section className={`relative border-b border-white/5 ${bg} py-16 sm:py-20`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            {typeof index === "number" && (
              <span className="font-mono text-3xl font-black text-[#D4AF37]/15">
                {String(index).padStart(2, "0")}
              </span>
            )}
            <div>
              {eyebrow && (
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">{eyebrow}</p>
              )}
              <h2 className="text-2xl font-serif font-bold tracking-wide text-white sm:text-3xl">{title}</h2>
            </div>
          </div>
          <div className="text-base leading-relaxed text-white/65">{children}</div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudySection;
