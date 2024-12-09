import {
  LayoutDashboard,
  CheckSquare,
  Target,
  BookOpen,
  Calendar,
  Brain,
  Desk,
  StickyNote,
  CardStack,
  FileSpreadsheet,
  BookMarked,
  Users,
  GraduationCap,
  RefreshCw,
  Bell
} from 'lucide-react';

export const mainFeatures = {
  title: "Core Features",
  description: "Essential tools for academic success",
  features: [
    {
      title: "Dashboard",
      description: "A central hub for managing tasks, tracking progress, and staying organized",
      icon: LayoutDashboard,
      benefits: [
        "Intuitive task management",
        "Academic progress tracking",
        "Personalized overview"
      ]
    },
    {
      title: "To-dos",
      description: "Prioritize assignments, exams, and study goals effectively",
      icon: CheckSquare,
      benefits: [
        "Smart task prioritization",
        "Progress tracking",
        "Deadline management"
      ]
    },
    {
      title: "Study Goals",
      description: "Set and track personalized academic goals based on your performance",
      icon: Target,
      benefits: [
        "Performance-based goals",
        "Progress tracking",
        "Improvement suggestions"
      ]
    }
  ]
};

export const academicTools = {
  title: "Academic Tools",
  description: "Powerful features to enhance your learning experience",
  features: [
    {
      title: "Assignments",
      description: "Create, manage, and sync assignments with Canvas",
      icon: BookOpen,
      benefits: [
        "Canvas integration",
        "Real-time updates",
        "Assignment tracking"
      ]
    },
    {
      title: "Calendar",
      description: "Seamless calendar integration with Google Calendar",
      icon: Calendar,
      benefits: [
        "Google Calendar sync",
        "Deadline management",
        "Event scheduling"
      ]
    },
    {
      title: "My Desk",
      description: "Your personalized workspace for organizing academic materials",
      icon: Desk,
      benefits: [
        "Customizable layout",
        "Resource organization",
        "Quick access"
      ]
    }
  ]
};

export const studyTools = {
  title: "Study Tools",
  description: "Enhanced learning tools for better understanding",
  features: [
    {
      title: "Notes",
      description: "Intuitive note-taking system with class-specific organization",
      icon: StickyNote,
      benefits: [
        "Class organization",
        "Easy access",
        "Quick review"
      ]
    },
    {
      title: "Flashcards",
      description: "Create and study flashcards to improve retention",
      icon: CardStack,
      benefits: [
        "Subject organization",
        "Study tracking",
        "Learning efficiency"
      ]
    },
    {
      title: "Sheets",
      description: "Manage academic documents and spreadsheets centrally",
      icon: FileSpreadsheet,
      benefits: [
        "Document management",
        "Resource organization",
        "Easy sharing"
      ]
    }
  ]
};

export const aiFeatures = {
  title: "AI-Powered Features",
  description: "Intelligent assistance for academic excellence",
  features: [
    {
      title: "AI Study Assistant",
      description: "Get personalized study recommendations and instant answers",
      icon: Brain,
      benefits: [
        "Personalized recommendations",
        "Instant help",
        "Learning optimization"
      ]
    },
    {
      title: "GPA Tracker",
      description: "Track academic performance with AI-powered insights",
      icon: GraduationCap,
      benefits: [
        "Performance tracking",
        "Grade insights",
        "Improvement suggestions"
      ]
    },
    {
      title: "Smart Sync",
      description: "Seamless integration with Canvas and other platforms",
      icon: RefreshCw,
      benefits: [
        "Canvas integration",
        "Real-time updates",
        "Automated sync"
      ]
    }
  ]
};

export const additionalFeatures = {
  title: "Additional Features",
  description: "Supporting tools for complete academic management",
  features: [
    {
      title: "Resources",
      description: "Access study materials and academic resources",
      icon: BookMarked,
      benefits: [
        "Study guides",
        "Learning materials",
        "Resource library"
      ]
    },
    {
      title: "Contacts",
      description: "Manage academic contacts and communications",
      icon: Users,
      benefits: [
        "Contact management",
        "Quick access",
        "Communication tools"
      ]
    },
    {
      title: "Reminders",
      description: "Smart notifications for assignments and deadlines",
      icon: Bell,
      benefits: [
        "Smart notifications",
        "Deadline tracking",
        "Priority alerts"
      ]
    }
  ]
};