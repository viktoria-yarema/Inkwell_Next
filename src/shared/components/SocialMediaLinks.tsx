import { SocialMediaLink } from "@/entities/user/type";
import { ExternalLink } from "lucide-react";

// Social media platform configurations
const SOCIAL_MEDIA_PLATFORMS = [
  { id: "facebook", name: "Facebook", icon: "📘", color: "#1877F2" },
  { id: "instagram", name: "Instagram", icon: "📷", color: "#E4405F" },
  { id: "twitter", name: "Twitter", icon: "🐦", color: "#1DA1F2" },
  { id: "linkedin", name: "LinkedIn", icon: "💼", color: "#0077B5" },
  { id: "youtube", name: "YouTube", icon: "📺", color: "#FF0000" },
  { id: "tiktok", name: "TikTok", icon: "🎵", color: "#000000" },
  { id: "snapchat", name: "Snapchat", icon: "👻", color: "#FFFC00" },
  { id: "pinterest", name: "Pinterest", icon: "📌", color: "#BD081C" },
  { id: "reddit", name: "Reddit", icon: "🤖", color: "#FF4500" },
  { id: "discord", name: "Discord", icon: "💬", color: "#5865F2" },
  { id: "telegram", name: "Telegram", icon: "✈️", color: "#0088CC" },
  { id: "whatsapp", name: "WhatsApp", icon: "💬", color: "#25D366" },
  { id: "github", name: "GitHub", icon: "🐙", color: "#333333" },
  { id: "gitlab", name: "GitLab", icon: "🦊", color: "#FCA326" },
  { id: "behance", name: "Behance", icon: "🎨", color: "#1769FF" },
  { id: "dribbble", name: "Dribbble", icon: "🏀", color: "#EA4C89" },
  { id: "medium", name: "Medium", icon: "📝", color: "#00AB6C" },
  { id: "dev", name: "Dev.to", icon: "👨‍💻", color: "#0A0A0A" },
  { id: "hashnode", name: "Hashnode", icon: "🌐", color: "#2962FF" },
  { id: "twitch", name: "Twitch", icon: "🎮", color: "#9146FF" },
  { id: "spotify", name: "Spotify", icon: "🎵", color: "#1DB954" },
  { id: "soundcloud", name: "SoundCloud", icon: "🎶", color: "#FF5500" },
  { id: "vimeo", name: "Vimeo", icon: "🎬", color: "#1AB7EA" },
  { id: "flickr", name: "Flickr", icon: "📸", color: "#0063DC" },
  { id: "tumblr", name: "Tumblr", icon: "📝", color: "#001935" },
];

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
