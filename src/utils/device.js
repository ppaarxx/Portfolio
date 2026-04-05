export const getIsMobile = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
};
