export interface Quiz {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  questions: Question[];
  author: string;
  dateCreated: string;
  views: number;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  image?: string;
}

export interface Result {
  title: string;
  description: string;
  image: string;
}