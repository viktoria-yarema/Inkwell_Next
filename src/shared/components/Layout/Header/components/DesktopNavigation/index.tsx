import { navLinks } from '@/shared/constants/navLinks';
import Link from 'next/link';

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map(link => (
        <Link
          key={link.label}
          href={link.href}
          className="font-medium text-gray-700 hover:text-primary-yellow transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
