export const isLinkActive = url => (match, { pathname, search }) => url === pathname + decodeURIComponent(search);
