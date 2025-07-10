import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Heart, Users, GraduationCap } from "lucide-react";

interface QuizPopupProps {
  onComplete: (segment: string) => void;
  onClose: () => void;
}

const QuizPopup = ({ onComplete, onClose }: QuizPopupProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 0,
      question: "Do you have children?",
      options: [
        { value: "yes", label: "Yes, I have children" },
        { value: "no", label: "No, I don't have children" }
      ]
    },
    {
      id: 1,
      question: "What interests you most?",
      options: [
        { value: "volunteer", label: "Volunteering my time" },
        { value: "donate", label: "Making financial contributions" },
        { value: "browse", label: "Learning about the cause" }
      ]
    },
    {
      id: 2,
      question: "What's your current situation?",
      options: [
        { value: "student", label: "Student" },
        { value: "professional", label: "Working Professional" },
        { value: "retired", label: "Retired" },
        { value: "other", label: "Other" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Determine user segment based on answers
      const segment = determineSegment(newAnswers);
      onComplete(segment);
    }
  };

  const determineSegment = (answers: Record<number, string>) => {
    const hasChildren = answers[0] === "yes";
    const interest = answers[1];
    const situation = answers[2];

    if (hasChildren && interest === "donate") {
      return "parent-donor";
    } else if (situation === "student" && interest === "volunteer") {
      return "student-volunteer";
    } else if (situation === "professional" && interest === "donate") {
      return "professional-donor";
    } else if (interest === "volunteer") {
      return "general-volunteer";
    } else if (interest === "browse") {
      return "explorer";
    } else {
      return "general-donor";
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md shadow-glow animate-scale-in">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-0 top-0"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="text-center">
            <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl">Help Us Personalize Your Experience</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Just 3 quick questions to show you the most relevant content
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-hero h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground text-center mt-1">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold text-center mb-6">
            {currentQ.question}
          </h3>
          
          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="w-full text-left justify-start h-auto p-4 hover:bg-primary/5 hover:border-primary"
                onClick={() => handleAnswer(option.value)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <span>{option.label}</span>
                </div>
              </Button>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              Your data is private and helps us show you relevant content
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizPopup;