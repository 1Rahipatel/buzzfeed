import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/quizzes" element={<HomePage />} />
            <Route path="/entertainment" element={<HomePage />} />
            <Route path="/celebrity" element={<HomePage />} />
            <Route path="/food" element={<HomePage />} />
            <Route path="/travel" element={<HomePage />} />
            <Route path="/love" element={<HomePage />} />
            <Route path="/trending" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;