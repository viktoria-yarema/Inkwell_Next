import { Card } from "@/shared/components/ui/card";
import { SunMedium } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

type TeachingPhilosophySectionProps = {
  title: string;
  content: string;
};

export default function TeachingPhilosophySection({
  title,
  content,
}: TeachingPhilosophySectionProps) {
  return (
    <Card className="rounded-2xl p-4 lg:p-8 md:p-10 mb-8 bg-primary-light/20">
      <SectionTitle icon={SunMedium} title={title} />
      <div className="prose prose-lg prose-yellow mx-auto">
        <p className="text-font-primary/80 leading-relaxed mb-4">{content}</p>
      </div>
    </Card>
  );
}
