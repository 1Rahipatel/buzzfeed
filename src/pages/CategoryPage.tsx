import { useParams } from 'react-router-dom';
import QuizCard from '../components/QuizCard';
import { Filter } from 'lucide-react';

const CATEGORY_QUIZZES = {
  entertainment: {
    title: 'TV & Movies Quizzes',
    description: 'Test your knowledge of the entertainment world',
    quizzes: [
      {
        id: '4',
        title: 'Can You Guess The Movie From Just One Frame?',
        description: 'Only true film buffs can ace this visual challenge!',
        thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2940',
        category: 'Movies',
        questions: [],
        author: 'CinemaExpert',
        dateCreated: '3h ago',
        views: 7823
      },
      {
        id: '5',
        title: 'Match The TV Show Quote To The Character',
        description: 'How well do you know your favorite TV shows?',
        thumbnail: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=2940',
        category: 'TV Shows',
        questions: [],
        author: 'SeriesLover',
        dateCreated: '6h ago',
        views: 5421
      }
    ]
  },
  food: {
    title: 'Food & Cooking Quizzes',
    description: 'Discover your inner chef and food preferences',
    quizzes: [
      {
        id: '6',
        title: 'What Kind of Food Matches Your Personality?',
        description: 'Let your taste buds guide you to self-discovery!',
        thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2940',
        category: 'Food',
        questions: [],
        author: 'FoodieChef',
        dateCreated: '1d ago',
        views: 9876
      }
    ]
  }
};

export default function CategoryPage() {
  const { category = 'entertainment' } = useParams();
  const categoryData = CATEGORY_QUIZZES[category as keyof typeof CATEGORY_QUIZZES] || CATEGORY_QUIZZES.entertainment;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{categoryData.title}</h1>
        <p className="mt-2 text-gray-600">{categoryData.description}</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <select className="border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white px-4 py-2">
            <option>Most Recent</option>
            <option>Most Popular</option>
            <option>Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}