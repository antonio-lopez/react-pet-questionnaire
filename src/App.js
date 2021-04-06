import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';
import Result from './components/Result';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1);
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

  const handleAnswerSelected = (event) => {
    console.log('CONSOLE EVENT TRGT:', event.currentTarget.value);
    setUserAnswer(event.currentTarget.value);
    if (questionId < quizQuestions.length) {
      // setTimeout(() => setNextQuestion(), 300);
      setNextQuestion();
    } else {
      // setTimeout(() => setResults(getResults()), 300);
      setResults(getResults());
    }
  };

  const setUserAnswer = (answer) => {
    setAnswersCount({
      ...answersCount,
      [answer]: (answersCount[answer] || 0) + 1,
    });
    setAnswer(answer);
  };

  const setNextQuestion = () => {
    setCounter(counter + 1);
    setQuestionId(questionId + 1);
    setQuestion(quizQuestions[counter].question);
    setAnswerOptions(quizQuestions[counter].answers);
    setAnswer('');
  };

  const getResults = () => {
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswersCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswersCount
    );
  };

  const setResults = (result) => {
    if (result.length === 1) {
      setResult(result[0]);
    } else {
      setResult('Undetermined');
    }
  };

  const renderQuiz = () => {
    return (
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    );
  };

  const renderResult = () => {
    return <Result quizResult={result} />;
  };

  // console.log('counter:', counter);
  // console.log('questionID', questionId);
  // console.log('question:', question);
  // console.log('answerOptions:', answerOptions);
  // console.log('answer:', answer);
  // console.log('answersCount:', answersCount);
  // console.log('result:', result);

  return (
    <div className='app'>
      <h2>Pet Quiz</h2>
      {result ? renderResult() : renderQuiz()}
    </div>
  );
}

export default App;
