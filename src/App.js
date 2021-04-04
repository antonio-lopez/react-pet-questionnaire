import { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';

function App() {
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answersCount, setAnswersCount] = useState({});
  const [result, setResult] = useState('');
  // const [quizValues, setQuizValues] = useState({
  //   counter: 0,
  //   questionId: 1,
  //   question: '',
  //   answerOptions: [],
  //   answer: '',
  //   answersCount: {},
  //   result: '',
  // });

  useEffect(() => {
    function getShuffledAnswerOptions() {
      const shuffledAnswerOptions = quizQuestions.map((question) =>
        shuffleArray(question.answers)
      );
      setQuestion(quizQuestions[0].question);
      setAnswerOptions(shuffledAnswerOptions[0]);
    }

    getShuffledAnswerOptions();
  }, []);

  const shuffleArray = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  console.log(question);
  console.log(answerOptions);

  return (
    <div className='app'>
      <h2>Pet Quiz</h2>
      <Question content='What is your favorite pet?' />
    </div>
  );
}

export default App;
