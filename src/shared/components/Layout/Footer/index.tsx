import { getTags } from '@/entities/tags/api/getTags';
import { navLinks } from '@/shared/constants/navLinks';
import { PRIVACY_PATH } from '@/shared/routes/paths';
import { Facebook, Mail } from 'lucide-react';
import Link from 'next/link';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const tags = await getTags();

  return (
    <footer className="bg-primary-blue/70 pt-12 pb-6 *:hover:text-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Growing Minds</h3>
            <p className="text-gray-600 mb-4">
              A kindergarten teacher&lsquo;s blog sharing early childhood education insights,
              activities, and resources.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@growingminds.edu"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={PRIVACY_PATH}
                className="text-gray-600 hover:text-primary-yellow transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <nav className="flex flex-col gap-2">
              {tags.map(tag => (
                <Link
                  key={tag.id}
                  href={`/articles?category=${tag.id}`}
                  className="text-gray-600 hover:text-primary-yellow transition-colors"
                >
                  {tag.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-black/60 pt-6 text-center text-font-secondary text-sm">
          <p>&copy; {currentYear} Growing Minds Kindergarten. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
