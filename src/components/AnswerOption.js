import React from 'react';

function AnswerOption({ answerType, answerContent, answer, onAnswerSelected }) {
  return (
    <li className='answerOption'>
      <input
        type='radio'
        className='radioCustomButton'
        name='radioGroup'
        checked={answerType === answer}
        id={answerType}
        value={answerType}
        disabled={answer}
        onChange={onAnswerSelected}
      />
      <label htmlFor={answerType} className='radioCustomLabel'>
        {answerContent}
      </label>
    </li>
  );
}

export default AnswerOption;
