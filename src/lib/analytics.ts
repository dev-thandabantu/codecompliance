/**
 * PostHog Analytics Integration
 * Tracks: page views, CTA clicks, form submissions, role selection
 * Designed to be easily removable if needed
 */

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
}

/**
 * Track a page view
 */
export const trackPageView = (pathname: string) => {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture("$pageview", {
      $pathname: pathname,
    });
  }
};

/**
 * Track CTA button clicks
 */
export const trackCtaClick = (ctaName: string, ctaType?: string) => {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture("cta_click", {
      cta_name: ctaName,
      cta_type: ctaType || "button",
    });
  }
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.posthog) {
    const properties: Record<string, any> = {
      form_name: formName,
    };

    // Only track non-sensitive fields
    if (formData) {
      if (formData.role) {
        properties.role = formData.role;
      }
    }

    window.posthog.capture("form_submission", properties);
  }
};

/**
 * Track role selection
 */
export const trackRoleSelection = (role: string) => {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture("role_selected", {
      role: role,
    });
  }
};

// Type declaration for posthog global
declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void;
      identify?: (id: string, properties?: Record<string, any>) => void;
      reset?: () => void;
    };
  }
}
