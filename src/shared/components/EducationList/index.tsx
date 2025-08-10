import { educationSchema } from "@/entities/user/validators/about";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";
import { z } from "zod";

type Education = z.infer<typeof educationSchema>[number];

type EducationListProps = {
  educations: Education[];
};

export default function EducationList({ educations }: EducationListProps) {
  const formatDateRange = (startDate?: Date, endDate?: Date) => {
    if (!startDate && !endDate) return "";

    const start = startDate ? format(startDate, "MMM yyyy") : "";
    const end = endDate ? format(endDate, "MMM yyyy") : "Present";

    if (!startDate) return end;
    if (!endDate) return `${start} - Present`;

    return `${start} - ${end}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {educations.map(({ title, schoolName, startDate, endDate, location }, index) => (
        <div
          key={index}
          className="bg-light-yellow/10 rounded-lg p-4 sm:p-5 border-l-4 border-primary hover:shadow-md transition-shadow duration-200"
        >
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-medium text-font-primary text-sm sm:text-base leading-tight">
              {title}
            </h3>

            <p className="text-font-primary font-semibold text-base sm:text-lg">{schoolName}</p>

            <div className="space-y-1 sm:space-y-0 sm:flex sm:justify-between sm:items-center text-xs sm:text-sm text-font-primary/70">
              <div className="flex items-center">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                <span className="truncate">{location}</span>
              </div>

              {(startDate || endDate) && (
                <div className="flex items-center sm:ml-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0 sm:hidden" />
                  <span className="font-medium whitespace-nowrap">
                    {formatDateRange(startDate, endDate)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
