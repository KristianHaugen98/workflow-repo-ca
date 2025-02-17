export default function isActivePath(currentPath, href) {
  if (currentPath === href) return true;
  if (href === "/" && (currentPath === "/" || currentPath === "/index.html"))
    return true;
  if (currentPath.startsWith(href + "/")) return true; // dette sikrer at det er en sti.
  return false;
}
