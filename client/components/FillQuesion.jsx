import React from 'react'

const FillQuestion = (props) => {
  const { handleAnswerClick, highlightAnswers, question: {id, answers, content} } = props
  return (
  <div>
      <div className='flex column'>
        <div className="w-80 bg-light-green2 bt bw3 border-dark-green2 mt4 center">
          <div
            className="w-100 h foucs-border-green border shadow-2 pa2"
          >
            {content}
          </div>
          {answers.map( (answer) => (
            <div key={answer.id} onClick={() => handleAnswerClick(answer.id, id)}>
              <div className={`fl w-10 h2 f4 gray pointer mt3 pl4 dim ${highlightAnswers.includes(answer.id) ? 'green' : '' }`}>
                &#9675;
              </div>
              <div className="fl w-90 mt3">
                <div
                  className={`w-100 border shadow-2 pointer pa2 dim ${highlightAnswers.includes(answer.id) ? 'green' : '' }`}
                >
                  {answer.content} &nbsp;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  )
}

export default FillQuestion