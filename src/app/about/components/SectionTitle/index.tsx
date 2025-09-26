import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  icon: LucideIcon;
  title: string;
  className?: string;
};

export default function SectionTitle({ icon: Icon, title, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <div className="bg-primary p-3 rounded-full">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-font-primary title">{title}</h2>
    </div>
  );
}
