import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Share2 } from 'lucide-react';

// Mock quiz data (in a real app, this would come from your Go backend)
const MOCK_QUIZ = {
  id: '1',
  title: 'Which Classic Novel Matches Your Personality?',
  description: 'Take this quiz to discover which timeless piece of literature truly reflects who you are!',
  thumbnail: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=2940',
  questions: [
    {
      id: '1',
      text: 'How do you prefer to spend your free time?',
      options: [
        { id: 'a', text: 'Reading in a cozy corner', image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1974' },
        { id: 'b', text: 'Exploring the outdoors', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=2940' },
        { id: 'c', text: 'Socializing with friends', image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=2940' },
        { id: 'd', text: 'Creating art', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=2940' }
      ]
    }
  ]
};

export default function QuizPage() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);
    
    if (currentQuestion < MOCK_QUIZ.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // In a real app, you would send the answers to your Go backend
      console.log('Quiz completed!', newAnswers);
    }
  };

  const question = MOCK_QUIZ.questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Quiz Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{MOCK_QUIZ.title}</h1>
        <p className="mt-2 text-gray-600">{MOCK_QUIZ.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
        <div
          className="bg-red-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / MOCK_QUIZ.questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">{question.text}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.id)}
              className="relative group overflow-hidden rounded-lg border-2 border-gray-200 hover:border-red-500 transition-colors"
            >
              <img
                src={option.image}
                alt={option.text}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-white">
                <span className="font-medium">{option.text}</span>
                <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Share Button */}
      <div className="text-center">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Share2 className="h-4 w-4 mr-2" />
          Share Quiz
        </button>
      </div>
    </div>
  );
}