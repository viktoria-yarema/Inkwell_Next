type SkillsSectionProps = {
  skills: string[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="mt-8 p-6 bg-primary-light/10 rounded-lg border border-dashed border-primary-dark/30">
        <h3 className="font-bold text-lg text-font-primary mb-3 title">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span
              key={skill}
              className="bg-primary-dark/20 text-primary-dark px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
