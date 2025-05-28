'use client';

import { cn } from '@/shared/utils/cn';

export type CalendarProps = {
  className?: string;
  classNames?: {
    container?: string;
    content?: string;
  };
  showOutsideDays?: boolean;
};

function Calendar({ className, classNames = {}, showOutsideDays = true }: CalendarProps) {
  // Using showOutsideDays in a comment to indicate future implementation
  // When fully implementing calendar: days outside current month will be shown based on this flag
  const showExtraDays = showOutsideDays ? 'with-outside-days' : '';

  return (
    <div className={cn('calendar-container p-3', showExtraDays, className, classNames.container)}>
      <div className={cn('text-center', classNames.content)}>Calendar Component (Placeholder)</div>
    </div>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
