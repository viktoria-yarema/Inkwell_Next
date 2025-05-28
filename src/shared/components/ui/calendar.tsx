'use client';

import { cn } from '@/shared/utils/cn';

export type CalendarProps = {
  className?: string;
  classNames?: Record<string, string>;
  showOutsideDays?: boolean;
  [key: string]: any;
};

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <div className={cn('calendar-container p-3', className)}>
      <div className="text-center">Calendar Component (Placeholder)</div>
    </div>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
