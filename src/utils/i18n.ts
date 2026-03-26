// SPDX-License-Identifier: MIT

const BASE_URL = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "") || "";

function withBase(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${clean}` || "/";
}

function withoutBase(path: string): string {
  if (!BASE_URL) return path || "/";
  if (path === BASE_URL) return "/";
  return path.startsWith(`${BASE_URL}/`) ? path.slice(BASE_URL.length) || "/" : path;
}

/**
 * Returns a locale-prefixed path.
 * English (default) has no prefix; Vietnamese gets /vi prefix.
 */
export function localePath(path: string, locale: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "vi") {
    return withBase(clean === "/" ? "/vi/" : `/vi${clean}`);
  }
  return withBase(clean);
}

/**
 * Returns the alternate locale URL path for the given path.
 */
export function getAlternatePath(currentPath: string): { path: string; locale: string } {
  const path = withoutBase(currentPath);
  if (path.startsWith("/vi/") || path === "/vi") {
    return { path: withBase(path.replace(/^\/vi/, "") || "/"), locale: "en" };
  }
  return { path: withBase(path === "/" ? "/vi/" : `/vi${path}`), locale: "vi" };
}
