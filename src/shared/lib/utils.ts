import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const smoothScroll = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href')?.substring(1);
  if (targetId) {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
};