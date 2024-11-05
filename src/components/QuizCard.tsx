import { Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Quiz } from '../types';

interface QuizCardProps {
  quiz: Quiz;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  return (
    <Link to={`/quiz/${quiz.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1">
        <div className="relative aspect-[16/9]">
          <img
            src={quiz.thumbnail}
            alt={quiz.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-xs font-medium text-white bg-red-500 rounded-full px-2 py-1 inline-block">
              {quiz.category}
            </p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-500 line-clamp-2">
            {quiz.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {quiz.description}
          </p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{quiz.dateCreated}</span>
            </div>
            <div className="flex items-center ml-4">
              <Eye className="h-4 w-4 mr-1" />
              <span>{quiz.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}