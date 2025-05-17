import { X } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover';
import { navLinks } from '@/shared/constants/navLinks';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild className="group">
        <button
          className="md:hidden group text-gray-700 hover:text-primary-yellow focus:outline-none"
          aria-label="Open menu"
        >
          <X size={24} className="hidden group-data-[state=open]:block" />
          <Menu size={24} className="block group-data-[state=open]:hidden" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-screen p-0 border-none mt-4" forceMount>
        <div className="bg-white py-4 px-6 shadow-md">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-gray-700 hover:text-primary-yellow transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MobileMenu;
