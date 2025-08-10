import { getTags } from "@/entities/tags/api/getTags";
import { navLinks } from "@/shared/constants/navLinks";
import { ARTICLES_PATH, PRIVACY_PATH } from "@/shared/routes/paths";
import { getImageUrl } from "@/shared/utils/getImage";
import { Facebook, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type FooterProps = {
  logoUrl: string;
  brandName: string;
  description: string;
};

const Footer: FC<FooterProps> = async ({ logoUrl, brandName, description }) => {
  const tags = await getTags();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/90 pt-12 pb-6 text-font-primary">
      <div className="px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={getImageUrl(`/page-content/${logoUrl}`)}
                alt={brandName}
                width={48}
                height={48}
              />
              <p className="font-bold text-xl uppercase text-primary-dark">{brandName}</p>
            </div>
            <p className="text-font-primary/80 mb-4">{description}</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-font-primary/80 hover:text-font-primary/60  transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@growingminds.edu"
                className="text-font-primary/80 hover:text-font-primary/60  transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-font-primary/80 mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-font-primary/80 hover:text-font-primary/60  transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={PRIVACY_PATH}
                className="text-font-primary/80 hover:text-font-primary/60  transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-font-primary/80">Categories</h3>
            <nav className="flex flex-col gap-2">
              {tags.map(tag => (
                <Link
                  key={tag.id}
                  href={`${ARTICLES_PATH}?category=${tag.id}`}
                  className="text-font-primary/80 hover:text-font-primary/60  transition-colors"
                >
                  {tag.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-font-primary/20 pt-6 text-center text-font-primary/80 text-sm">
          <p>&copy; {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
