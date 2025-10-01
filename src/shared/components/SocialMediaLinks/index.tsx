import { SocialMediaLink } from "@/entities/user/type";
import { SOCIAL_MEDIA_PLATFORMS } from "@/shared/constants/socialMedia";
import { ExternalLink } from "lucide-react";

type SocialMediaLinksProps = {
  socialMedia: SocialMediaLink[];
  className?: string;
};

export default function SocialMediaLinks({ socialMedia, className = "" }: SocialMediaLinksProps) {
  if (!socialMedia || socialMedia.length === 0) {
    return null;
  }

  const getPlatformInfo = (id: string) => {
    return SOCIAL_MEDIA_PLATFORMS.find(platform => platform.id === id);
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialMedia.map(social => {
        const platform = getPlatformInfo(social.id);
        if (!platform) return null;

        return (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
            style={{ borderLeft: `3px solid ${platform.color}` }}
          >
            <span className="text-lg">{platform.icon}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
              {platform.name}
            </span>
            <ExternalLink
              size={14}
              className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"
            />
          </a>
        );
      })}
    </div>
  );
}
