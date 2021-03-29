
const handleAnswerChange = (state,playload) => {
  const {answerId, questionId, event} = playload;
  const anotherQuestions = state.questions.filter(question => question.id!=questionId)
  const question = state.questions.filter(question => question.id==questionId)[0]
  const answer = {...question.answers.filter(answer=> answer.id==answerId)[0], content: event.target.value}
  const anotherAnswers = question.answers.filter(answer=> answer.id!=answerId)
  const answers = [...anotherAnswers, answer]
  const updatedQuestion = {...question, answers: answers}
  return {...state, questions: [...anotherQuestions,updatedQuestion]}
}

export {handleAnswerChange};