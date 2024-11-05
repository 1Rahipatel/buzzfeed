import TrendingSection from '../components/TrendingSection';
import { TrendingUp, Sparkles, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Discover Yourself Through Fun Quizzes
            </h1>
            <p className="mt-4 text-xl text-red-100">
              Take our personality quizzes and share your results with friends!
            </p>
          </div>
          <div className="mt-10 flex justify-center space-x-6">
            <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors">
              Start Quiz
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Create Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Trending Quizzes</h3>
            <p className="mt-2 text-gray-600">Take the most popular quizzes of the moment</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500 mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Personalized Results</h3>
            <p className="mt-2 text-gray-600">Get unique insights about yourself</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500 mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Share & Compare</h3>
            <p className="mt-2 text-gray-600">Share your results with friends</p>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <TrendingSection />
    </div>
  );
}