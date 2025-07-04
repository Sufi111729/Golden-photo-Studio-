"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === "production") {
      // Log metrics for analysis
      console.log(metric);

      // You can send to analytics service here
      // Example: analytics.track('Web Vital', metric)
    }
  });

  return null;
}
