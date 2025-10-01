import { SocialMediaPlatform } from "@/shared/types/socialMedia";

export type SocialMediaPlatformInfo = {
  id: SocialMediaPlatform;
  name: string;
  icon: string;
  color: string;
};

export const SOCIAL_MEDIA_PLATFORMS: SocialMediaPlatformInfo[] = [
  { id: SocialMediaPlatform.FACEBOOK, name: "Facebook", icon: "📘", color: "#1877F2" },
  { id: SocialMediaPlatform.INSTAGRAM, name: "Instagram", icon: "📷", color: "#E4405F" },
  { id: SocialMediaPlatform.TWITTER, name: "Twitter", icon: "🐦", color: "#1DA1F2" },
  { id: SocialMediaPlatform.LINKEDIN, name: "LinkedIn", icon: "💼", color: "#0077B5" },
  { id: SocialMediaPlatform.YOUTUBE, name: "YouTube", icon: "📺", color: "#FF0000" },
  { id: SocialMediaPlatform.TIKTOK, name: "TikTok", icon: "🎵", color: "#000000" },
  { id: SocialMediaPlatform.SNAPCHAT, name: "Snapchat", icon: "👻", color: "#FFFC00" },
  { id: SocialMediaPlatform.PINTEREST, name: "Pinterest", icon: "📌", color: "#BD081C" },
  { id: SocialMediaPlatform.REDDIT, name: "Reddit", icon: "🤖", color: "#FF4500" },
  { id: SocialMediaPlatform.DISCORD, name: "Discord", icon: "💬", color: "#5865F2" },
  { id: SocialMediaPlatform.TELEGRAM, name: "Telegram", icon: "✈️", color: "#0088CC" },
  { id: SocialMediaPlatform.WHATSAPP, name: "WhatsApp", icon: "💬", color: "#25D366" },
  { id: SocialMediaPlatform.GITHUB, name: "GitHub", icon: "🐙", color: "#333333" },
  { id: SocialMediaPlatform.GITLAB, name: "GitLab", icon: "🦊", color: "#FCA326" },
  { id: SocialMediaPlatform.BEHANCE, name: "Behance", icon: "🎨", color: "#1769FF" },
  { id: SocialMediaPlatform.DRIBBBLE, name: "Dribbble", icon: "🏀", color: "#EA4C89" },
  { id: SocialMediaPlatform.MEDIUM, name: "Medium", icon: "📝", color: "#00AB6C" },
  { id: SocialMediaPlatform.DEV, name: "Dev.to", icon: "👨‍💻", color: "#0A0A0A" },
  { id: SocialMediaPlatform.HASHNODE, name: "Hashnode", icon: "🌐", color: "#2962FF" },
  { id: SocialMediaPlatform.TWITCH, name: "Twitch", icon: "🎮", color: "#9146FF" },
  { id: SocialMediaPlatform.SPOTIFY, name: "Spotify", icon: "🎵", color: "#1DB954" },
  { id: SocialMediaPlatform.SOUNDCLOUD, name: "SoundCloud", icon: "🎶", color: "#FF5500" },
  { id: SocialMediaPlatform.VIMEO, name: "Vimeo", icon: "🎬", color: "#1AB7EA" },
  { id: SocialMediaPlatform.FLICKR, name: "Flickr", icon: "📸", color: "#0063DC" },
  { id: SocialMediaPlatform.TUMBLR, name: "Tumblr", icon: "📝", color: "#001935" },
];
