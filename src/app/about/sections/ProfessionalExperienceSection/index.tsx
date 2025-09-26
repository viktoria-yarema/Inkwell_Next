import { Card } from "@/shared/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

type ProfessionalExperience = {
  jobTitle: string;
  companyName: string;
  description: string;
};

type ProfessionalExperienceSectionProps = {
  experiences: ProfessionalExperience[];
};

export default function ProfessionalExperienceSection({
  experiences,
}: ProfessionalExperienceSectionProps) {
  return (
    <Card className="rounded-2xl p-4 lg:p-8 md:p-10 mb-8">
      <SectionTitle icon={BriefcaseBusiness} title="Professional Experience" />

      <div className="space-y-6 pl-5">
        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-4 lg:pl-8 border-l-2 border-primary-dark/30">
            <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary rounded-full"></div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-lg text-font-primary title">{experience.jobTitle}</h3>
              <p className="text-primary-dark font-medium">{experience.companyName}</p>
              <p className="mt-2 text-font-primary/80">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
