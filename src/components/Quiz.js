import React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
// import doggo from '../img/corgi-dog-smiling-wall.jpg';
import doggo from '../img/cute-welsh-corgi-puppy-lying-back.jpg';

function Quiz({
  questionId,
  questionTotal,
  question,
  answerOptions,
  answer,
  onAnswerSelected,
}) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={answer}
        questionId={questionId}
        onAnswerSelected={onAnswerSelected}
      />
    );
  }
  return (
    <div className='quiz'>
      <div className='dogContainer'>
        <img src={doggo} alt='' />
      </div>
      <div className='quizCard'>
        <QuestionCount counter={questionId} total={questionTotal} />
        <Question content={question} />
        <ul className='answerOptions'>
          {answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
