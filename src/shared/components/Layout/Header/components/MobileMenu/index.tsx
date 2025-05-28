import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { navLinks } from '@/shared/constants/navLinks';
import { Menu, X } from 'lucide-react';
import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Dialog modal>
        <DialogTrigger asChild className="group">
          <button
            className="md:hidden group text-gray-700 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} className="block text-primary-yellow" />
          </button>
        </DialogTrigger>
        <DialogContent className="fixed top-0 left-0 w-screen h-screen p-0 bg-transparent flex flex-col">
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: 'backIn' }}
            className="bg-primary-blue/80  py-4 h-full pl-6 pr-2 backdrop-blur-sm backdrop-saturate-[100%]"
          >
            <DialogHeader className="flex justify-between items-center flex-row mb-4">
              <DialogTitle></DialogTitle>
              <DialogClose asChild>
                <button className="focus:outline-none rounded-full h-10 w-10 flex items-center justify-center">
                  <X size={24} className="text-gray-700" />
                </button>
              </DialogClose>
            </DialogHeader>
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <DialogClose asChild key={link.label}>
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-medium text-gray-700 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </DialogClose>
              ))}
            </nav>
          </m.div>
        </DialogContent>
      </Dialog>
    </LazyMotion>
  );
};

export default MobileMenu;
