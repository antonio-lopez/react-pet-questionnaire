import React from 'react';

function QuestionCount({ counter, total }) {
  return (
    <div className='questionCount'>
      Question <span>{counter}</span> of <span>{total}</span>
    </div>
  );
}

export default QuestionCount;
