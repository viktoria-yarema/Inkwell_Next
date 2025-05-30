import { cn } from "@/shared/utils/cn";
import getExperienceYears from "@/shared/utils/getExperienceYears";

interface ExperienceBadgeProps {
  className?: string;
  years?: number;
  variant?: "floating" | "inline";
}

const ExperienceBadge = ({ className, years, variant = "floating" }: ExperienceBadgeProps) => {
  const experienceYears = years ?? getExperienceYears();

  const baseClasses = cn(
    "bg-white rounded-2xl transition-all duration-300 hover:scale-105",
    "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30",
    "border border-primary/10",
    variant === "floating" ? "absolute bottom-6 right-6 p-3" : "inline-block px-4 py-2"
  );

  return (
    <div className={cn(baseClasses, className)}>
      <span className="text-primary-dark font-bold text-sm md:text-base flex items-center gap-1">
        <span className="text-primary font-bold text-lg md:text-xl">
          {experienceYears}+
        </span>
        <span>Years Experience</span>
      </span>
    </div>
  );
};

export default ExperienceBadge;
