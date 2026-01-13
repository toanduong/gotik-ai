'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onINP, onLCP, onTTFB, Metric } from 'web-vitals';

export function WebVitals() {
  useEffect(() => {
    // Handler for sending metrics to analytics
    const sendToAnalytics = (metric: Metric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('[Web Vitals]', metric.name, metric.value, metric.rating);
      }

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          metric_id: metric.id,
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
        });
      }

      // You can also send to other analytics services
      // Example: Custom analytics endpoint
      /*
      fetch('/api/analytics/vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          id: metric.id,
          delta: metric.delta,
          navigationType: metric.navigationType,
        }),
      }).catch(console.error);
      */
    };

    // Register all Web Vitals
    onCLS(sendToAnalytics);  // Cumulative Layout Shift
    onFCP(sendToAnalytics);  // First Contentful Paint
    onINP(sendToAnalytics);  // Interaction to Next Paint (replaces deprecated FID)
    onLCP(sendToAnalytics);  // Largest Contentful Paint
    onTTFB(sendToAnalytics); // Time to First Byte
  }, []);

  return null; // This component doesn't render anything
}

// Export individual metric types for documentation
export type { Metric } from 'web-vitals';

/**
 * Web Vitals Thresholds:
 *
 * LCP (Largest Contentful Paint):
 * - Good: < 2.5s
 * - Needs Improvement: 2.5s - 4.0s
 * - Poor: > 4.0s
 *
 * FID (First Input Delay) [Deprecated]:
 * - Good: < 100ms
 * - Needs Improvement: 100ms - 300ms
 * - Poor: > 300ms
 *
 * INP (Interaction to Next Paint):
 * - Good: < 200ms
 * - Needs Improvement: 200ms - 500ms
 * - Poor: > 500ms
 *
 * CLS (Cumulative Layout Shift):
 * - Good: < 0.1
 * - Needs Improvement: 0.1 - 0.25
 * - Poor: > 0.25
 *
 * FCP (First Contentful Paint):
 * - Good: < 1.8s
 * - Needs Improvement: 1.8s - 3.0s
 * - Poor: > 3.0s
 *
 * TTFB (Time to First Byte):
 * - Good: < 800ms
 * - Needs Improvement: 800ms - 1800ms
 * - Poor: > 1800ms
 */
