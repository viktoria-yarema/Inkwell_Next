import {
  Apple,
  Bell,
  BookOpen,
  Calendar,
  Camera,
  CheckCircle,
  Clipboard,
  FileText,
  Globe,
  Heart,
  Image,
  List,
  MessageCircle,
  Palette,
  Pencil,
  Smile,
  Star,
  Users,
  Video,
} from 'lucide-react';
import { FC, SVGProps } from 'react';
import { InkwellIcon } from './type';

export const TAG_ICONS: Record<InkwellIcon, { name: string; Icon: FC<SVGProps<SVGSVGElement>> }> = {
  [InkwellIcon.BookOpen]: {
    name: 'BookOpen',
    Icon: BookOpen,
  },
  [InkwellIcon.Palette]: {
    name: 'Palette',
    Icon: Palette,
  },
  [InkwellIcon.Pencil]: {
    name: 'Pencil',
    Icon: Pencil,
  },
  [InkwellIcon.Heart]: {
    name: 'Heart',
    Icon: Heart,
  },
  [InkwellIcon.Users]: {
    name: 'Users',
    Icon: Users,
  },
  [InkwellIcon.Smile]: {
    name: 'Smile',
    Icon: Smile,
  },
  [InkwellIcon.Apple]: {
    name: 'Apple',
    Icon: Apple,
  },
  [InkwellIcon.Calendar]: {
    name: 'Calendar',
    Icon: Calendar,
  },
  [InkwellIcon.Camera]: {
    name: 'Camera',
    Icon: Camera,
  },
  [InkwellIcon.Video]: {
    name: 'Video',
    Icon: Video,
  },
  [InkwellIcon.MessageCircle]: {
    name: 'MessageCircle',
    Icon: MessageCircle,
  },
  [InkwellIcon.Image]: {
    name: 'Image',
    Icon: Image,
  },
  [InkwellIcon.List]: {
    name: 'List',
    Icon: List,
  },
  [InkwellIcon.CheckCircle]: {
    name: 'CheckCircle',
    Icon: CheckCircle,
  },
  [InkwellIcon.Star]: {
    name: 'Star',
    Icon: Star,
  },
  [InkwellIcon.Globe]: {
    name: 'Globe',
    Icon: Globe,
  },
  [InkwellIcon.Clipboard]: {
    name: 'Clipboard',
    Icon: Clipboard,
  },
  [InkwellIcon.Bell]: {
    name: 'Bell',
    Icon: Bell,
  },
  [InkwellIcon.FileText]: {
    name: 'FileText',
    Icon: FileText,
  },
  [InkwellIcon.PaintBrush]: {
    name: 'PaintBrush',
    Icon: Palette,
  },
};
