import { CanvasConfig, CanvasCourse, CanvasAssignment, CanvasGrade, CanvasError } from './types';

export class CanvasAPI {
  private config: CanvasConfig;

  constructor(config: CanvasConfig) {
    // Ensure the API URL doesn't end with a slash
    this.config = {
      ...config,
      apiUrl: config.apiUrl.replace(/\/$/, '')
    };
  }

  private async fetch<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.config.apiUrl}/api/v1${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors'
      });

      if (!response.ok) {
        let errorMessage = 'Failed to connect to Canvas';
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.errors?.[0]?.message || errorMessage;
        } catch {
          // If parsing JSON fails, use status text
          errorMessage = response.statusText || errorMessage;
        }

        const error: CanvasError = {
          message: errorMessage,
          status: response.status
        };
        throw error;
      }

      return response.json();
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new Error('Unable to connect to Canvas. Please check the URL and try again.');
      }
      throw error;
    }
  }

  async validateConnection(): Promise<boolean> {
    try {
      // Try to fetch user profile as a validation check
      const response = await fetch(`${this.config.apiUrl}/api/v1/users/self/profile`, {
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0]?.message || 'Invalid Canvas credentials');
      }

      return true;
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new Error('Unable to connect to Canvas. Please check the URL and try again.');
      }
      throw error;
    }
  }

  async getCourses(): Promise<CanvasCourse[]> {
    const courses = await this.fetch<any[]>('/courses?enrollment_type=student&include[]=term');
    
    return courses.map(course => ({
      id: course.id,
      name: course.name,
      courseCode: course.course_code,
      startAt: course.start_at,
      endAt: course.end_at,
    }));
  }

  async getAssignments(courseId: number): Promise<CanvasAssignment[]> {
    const assignments = await this.fetch<any[]>(
      `/courses/${courseId}/assignments?include[]=submission&include[]=rubric`
    );
    
    return assignments.map(assignment => ({
      id: assignment.id,
      name: assignment.name,
      description: assignment.description,
      dueAt: assignment.due_at,
      pointsPossible: assignment.points_possible,
      courseId: assignment.course_id,
    }));
  }

  async getGrades(courseId: number): Promise<CanvasGrade[]> {
    const enrollments = await this.fetch<any[]>(
      `/courses/${courseId}/enrollments?include[]=grades`
    );
    
    return enrollments.map(enrollment => ({
      courseId: enrollment.course_id,
      score: enrollment.grades?.current_score,
      grade: enrollment.grades?.current_grade,
    }));
  }
}