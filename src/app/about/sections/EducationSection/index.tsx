import { educationSchema } from "@/entities/user/validators/about";
import EducationList from "@/shared/components/EducationList";
import { Card } from "@/shared/components/ui/card";
import { GraduationCap } from "lucide-react";
import { z } from "zod";
import SectionTitle from "../../components/SectionTitle";

type Education = z.infer<typeof educationSchema>[number];

type EducationSectionProps = {
  educations: Education[];
};

export default function EducationSection({ educations }: EducationSectionProps) {
  return (
    <Card className="rounded-2xl p-4 lg:p-8 md:p-10">
      <SectionTitle icon={GraduationCap} title="Education and Certifications" />

      <EducationList educations={educations} />
    </Card>
  );
}
