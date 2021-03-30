
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
const handleQuestionChange = (state, playload) => {
  const {event, questionId} = playload
  const anotherQuestions = state.questions.filter(question => question.id!=questionId)
  const question = state.questions.filter(question => question.id==questionId)[0]
  const updatedQuestion = {...question, content: event.target.value}
  const questions = [...anotherQuestions, updatedQuestion]
  return {...state, questions: questions}
}

export {handleAnswerChange, handleQuestionChange};