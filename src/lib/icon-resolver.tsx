/**
 * Icon Resolver Component
 * 
 * Resolves IconConfig to actual React components
 * Supports Lucide icons, custom images, and emojis
 */

import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';
import { IconConfig } from '@/config/types';

interface IconResolverProps {
  icon: IconConfig;
  className?: string;
  size?: number;
}

export function IconResolver({ icon, className = '', size = 24 }: IconResolverProps) {
  if (icon.type === 'lucide') {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[icon.name];
    
    if (!IconComponent) {
      console.warn('Lucide icon not found:', icon.name);
      return <LucideIcons.HelpCircle className={className} size={size} />;
    }

    const iconClass = icon.className ? className + ' ' + icon.className : className;
    return <IconComponent className={iconClass} size={size} />;
  }

  if (icon.type === 'image') {
    return (
      <Image
        src={icon.src}
        alt={icon.alt}
        width={icon.width || size}
        height={icon.height || size}
        className={className}
      />
    );
  }

  if (icon.type === 'emoji') {
    const emojiClass = icon.className ? className + ' ' + icon.className : className;
    return (
      <span className={emojiClass} role="img" aria-label={icon.emoji}>
        {icon.emoji}
      </span>
    );
  }

  return null;
}
