const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path = ''): string {
  if (!path || path === '/') return base;
  if (path.startsWith('#')) return `${base}${path}`;
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function homeAnchor(id: string): string {
  return `${base}#${id}`;
}

export function projectUrl(slug: string): string {
  return withBase(`projetos/${slug}/`);
}
