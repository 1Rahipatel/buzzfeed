import { TrendingUp } from 'lucide-react';
import QuizCard from './QuizCard';

const TRENDING_QUIZZES = [
  {
    id: '1',
    title: 'Which Classic Novel Matches Your Personality?',
    description: 'Take this quiz to discover which timeless piece of literature truly reflects who you are!',
    thumbnail: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=2940',
    category: 'Literature',
    questions: [],
    author: 'BookWorm',
    dateCreated: '2h ago',
    views: 15420
  },
  {
    id: '2',
    title: 'Plan Your Dream Vacation And We\'ll Reveal Your Ideal Career',
    description: 'Your travel preferences might just hold the key to your perfect profession!',
    thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2940',
    category: 'Travel',
    questions: [],
    author: 'Wanderlust',
    dateCreated: '5h ago',
    views: 8930
  },
  {
    id: '3',
    title: 'Build Your Perfect Breakfast And We\'ll Guess Your Age',
    description: 'Your breakfast choices say more about you than you might think!',
    thumbnail: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=2940',
    category: 'Food',
    questions: [],
    author: 'FoodieFinds',
    dateCreated: '1d ago',
    views: 12543
  }
];

export default function TrendingSection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRENDING_QUIZZES.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </section>
  );
}