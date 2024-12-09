import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, RefreshCw, Calculator } from 'lucide-react';

// Mock data for courses and grades
const mockCourses = [
  {
    id: 1,
    name: 'Mathematics',
    currentGrade: 85,
    trend: 'up',
    nextAssignment: 'Homework Due 12/10',
    credits: 3,
    assignments: [
      { name: 'Quiz 1', grade: 88 },
      { name: 'Midterm', grade: 82 },
      { name: 'Quiz 2', grade: 85 }
    ]
  },
  {
    id: 2,
    name: 'Biology',
    currentGrade: 90,
    trend: 'steady',
    nextAssignment: 'Midterm on 12/15',
    credits: 4,
    assignments: [
      { name: 'Lab Report 1', grade: 92 },
      { name: 'Quiz 1', grade: 88 },
      { name: 'Lab Report 2', grade: 90 }
    ]
  },
  {
    id: 3,
    name: 'History',
    currentGrade: 78,
    trend: 'down',
    nextAssignment: 'Research Paper Due 12/20',
    credits: 3,
    assignments: [
      { name: 'Essay 1', grade: 82 },
      { name: 'Midterm', grade: 75 },
      { name: 'Quiz 1', grade: 77 }
    ]
  }
];

interface Course {
  id: number;
  name: string;
  currentGrade: number;
  trend: 'up' | 'down' | 'steady';
  nextAssignment: string;
  credits: number;
  assignments: Array<{ name: string; grade: number }>;
}

export function Grades() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showGPACalculator, setShowGPACalculator] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const calculateGPA = (courses: Course[]) => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const gradePoints = getGradePoints(course.currentGrade);
      totalPoints += gradePoints * course.credits;
      totalCredits += course.credits;
    });

    return (totalPoints / totalCredits).toFixed(2);
  };

  const getGradePoints = (percentage: number) => {
    if (percentage >= 93) return 4.0;
    if (percentage >= 90) return 3.7;
    if (percentage >= 87) return 3.3;
    if (percentage >= 83) return 3.0;
    if (percentage >= 80) return 2.7;
    if (percentage >= 77) return 2.3;
    if (percentage >= 73) return 2.0;
    if (percentage >= 70) return 1.7;
    if (percentage >= 67) return 1.3;
    if (percentage >= 63) return 1.0;
    if (percentage >= 60) return 0.7;
    return 0.0;
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'steady') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      case 'steady':
        return <Minus className="h-5 w-5 text-yellow-500" />;
    }
  };

  const handleSync = () => {
    setIsSyncing(true);
    // Simulate sync with Canvas
    setTimeout(() => {
      setIsSyncing(false);
      alert('Grades successfully synced with Canvas!');
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grades</h1>
          <p className="mt-1 text-gray-600">Current GPA: {calculateGPA(courses)}</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSync}
            className="flex items-center px-4 py-2 bg-violet-100 border border-violet-200 rounded-md shadow-sm text-sm font-medium text-violet-700 hover:bg-violet-200"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
            Sync with Canvas
          </button>
          <button
            onClick={() => setShowGPACalculator(!showGPACalculator)}
            className="flex items-center px-4 py-2 bg-violet-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-violet-700"
          >
            <Calculator className="h-4 w-4 mr-2" />
            GPA Calculator
          </button>
        </div>
      </div>

      {/* Grade Overview Table */}
      <div className="bg-violet-100 rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-violet-200">
            <thead className="bg-violet-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-900 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-900 uppercase tracking-wider">Current Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-900 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-900 uppercase tracking-wider">Next Assignment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-900 uppercase tracking-wider">Credits</th>
              </tr>
            </thead>
            <tbody className="bg-violet-50 divide-y divide-violet-200">
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-violet-100 cursor-pointer"
                  onClick={() => setSelectedCourse(course)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.currentGrade}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {getTrendIcon(course.trend)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.nextAssignment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
            <div className="fixed inset-0 transition-opacity" onClick={() => setSelectedCourse(null)}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{selectedCourse.name} Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Current Grade: {selectedCourse.currentGrade}%</h4>
                    <div className="mt-2">
                      <div className="h-2 bg-gray-200 rounded">
                        <div
                          className="h-2 bg-violet-600 rounded"
                          style={{ width: `${selectedCourse.currentGrade}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Assignment History</h4>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Assignment</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {selectedCourse.assignments.map((assignment, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 text-sm text-gray-900">{assignment.name}</td>
                            <td className="px-4 py-2 text-sm text-gray-900">{assignment.grade}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-violet-600 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 sm:text-sm"
                    onClick={() => setSelectedCourse(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GPA Calculator Modal */}
      {showGPACalculator && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
            <div className="fixed inset-0 transition-opacity" onClick={() => setShowGPACalculator(false)}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">GPA Calculator</h3>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Your current GPA is calculated based on your course grades and credit hours.
                    Grade points are assigned as follows:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>A (93-100): 4.0</div>
                    <div>A- (90-92): 3.7</div>
                    <div>B+ (87-89): 3.3</div>
                    <div>B (83-86): 3.0</div>
                    <div>B- (80-82): 2.7</div>
                    <div>C+ (77-79): 2.3</div>
                    <div>C (73-76): 2.0</div>
                    <div>C- (70-72): 1.7</div>
                    <div>D+ (67-69): 1.3</div>
                    <div>D (63-66): 1.0</div>
                    <div>D- (60-62): 0.7</div>
                    <div>F (0-59): 0.0</div>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Current GPA: {calculateGPA(courses)}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Total Credits: {courses.reduce((sum, course) => sum + course.credits, 0)}
                    </p>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-violet-600 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 sm:text-sm"
                    onClick={() => setShowGPACalculator(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}