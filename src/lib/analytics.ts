'use client';

type DataLayerValue = string | number | boolean | null | undefined;

type DataLayerPayload = Record<string, DataLayerValue>;

type LeadEventInput = {
  formName: string;
  source: string;
  course?: string | null;
  resource?: string | null;
};

type CourseInvestmentInput = {
  courseTitle: string;
  courseSlug: string;
  price?: number | string | null;
  currency?: string | null;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function createEventId(prefix: string) {
  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  return `${prefix}-${id}`;
}

function pagePath() {
  if (typeof window === 'undefined') return undefined;
  return `${window.location.pathname}${window.location.search}`;
}

function pushDataLayer(event: string, payload: DataLayerPayload = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_id: createEventId(event),
    page_path: pagePath(),
    ...payload,
  });
}

export function trackLead({ formName, source, course, resource }: LeadEventInput) {
  pushDataLayer('meta_lead', {
    form_name: formName,
    source,
    course,
    resource,
  });
}

export function trackSubmitRequest({ formName, source, course }: LeadEventInput) {
  pushDataLayer('meta_submit_request', {
    form_name: formName,
    source,
    course,
  });
}

export function trackCourseInvestmentClick({
  courseTitle,
  courseSlug,
  price,
  currency,
}: CourseInvestmentInput) {
  pushDataLayer('meta_course_investment_click', {
    course_title: courseTitle,
    course_slug: courseSlug,
    price,
    currency,
  });
}
