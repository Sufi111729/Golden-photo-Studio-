// Performance utilities for Golden Photo Studio

// Image optimization utility
export const getOptimizedImageUrl = (
  url: string,
  width: number,
  quality: number = 75,
): string => {
  if (url.includes("cdn.builder.io")) {
    return `${url}?format=webp&width=${width}&quality=${quality}`;
  }

  if (url.includes("i.ibb.co")) {
    // For external images, we rely on Next.js Image component optimization
    return url;
  }

  return url;
};

// Lazy loading intersection observer
export const createLazyLoadObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
): IntersectionObserver | null => {
  if (typeof window === "undefined") {
    // Return null for SSR
    return null;
  }

  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
  });
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Critical resource preloader
export const preloadCriticalResources = () => {
  if (typeof window === "undefined") return;

  // Preload critical images
  const criticalImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=webp&width=48",
    "https://i.ibb.co/qLQgB5sw/Untitled-design.png",
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

// Web Vitals reporting
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === "production") {
    // You can send metrics to analytics service here
    console.log(metric);
  }
};
