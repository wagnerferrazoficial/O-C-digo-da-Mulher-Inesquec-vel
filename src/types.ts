/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Benefit {
  id: string;
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface CourseModule {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: string[];
}
