import data from './common.json';

export function getStudioLogo(): string {
  return data.studioLogo;
}

export function getGameIcon(slug: string): string {
  return (data.gameIcons as Record<string, string>)[slug] ?? data.fallbackGameIcon;
}
