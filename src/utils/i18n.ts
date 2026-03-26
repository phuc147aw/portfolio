// SPDX-License-Identifier: MIT

/**
 * Returns a locale-prefixed path.
 * English (default) has no prefix; Vietnamese gets /vi prefix.
 */
export function localePath(path: string, locale: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "vi") {
    return clean === "/" ? "/vi/" : `/vi${clean}`;
  }
  return clean;
}

/**
 * Returns the alternate locale URL path for the given path.
 */
export function getAlternatePath(currentPath: string): { path: string; locale: string } {
  if (currentPath.startsWith("/vi/") || currentPath === "/vi") {
    return { path: currentPath.replace(/^\/vi/, "") || "/", locale: "en" };
  }
  return { path: currentPath === "/" ? "/vi/" : `/vi${currentPath}`, locale: "vi" };
}
