import React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

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
      <QuestionCount counter={questionId} total={questionTotal} />
      <Question content={question} />
      <ul className='answerOptions'>
        {answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

export default Quiz;
