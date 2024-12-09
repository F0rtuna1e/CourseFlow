import { z } from 'zod';

export const CanvasConfigSchema = z.object({
  apiUrl: z.string().url(),
  apiKey: z.string().min(1),
});

export type CanvasConfig = z.infer<typeof CanvasConfigSchema>;

export interface CanvasCourse {
  id: number;
  name: string;
  courseCode: string;
  startAt: string;
  endAt: string | null;
}

export interface CanvasAssignment {
  id: number;
  name: string;
  description: string;
  dueAt: string | null;
  pointsPossible: number;
  courseId: number;
}

export interface CanvasGrade {
  courseId: number;
  score: number;
  grade: string;
}

export interface CanvasError {
  message: string;
  status: number;
}