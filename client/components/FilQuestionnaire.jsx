import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { FETCH_COMPLETED_QUESTIONNAIRE_QUESTIONS } from '../reducers/root-reducer';
import FillQuestion from './FillQuesion';

const FilQuestionnaire = (props) => {
  const params = useParams();
  const completedQuestionnaireId = params.id;
  const [filedQuestions, setFiledQuestions] = useState([]);
  const { fetchQuestions, questions } = props;
  const filteredQuestions = questions.filter( question => question.content!='')

  useEffect( () =>{
    fetchQuestions(completedQuestionnaireId)
  }, [] )

  const handleAnswerClick = (answerId, questionId) => {
    const anotherQuestions = filedQuestions.filter( item => item.questionId!==questionId )
    setFiledQuestions([...anotherQuestions, {questionId, answerId}])
  }
  const highlightAnswers = filedQuestions.map(question => question.answerId)
  return (
    <div>
      {filteredQuestions.map( (question) => (
        <FillQuestion highlightAnswers={highlightAnswers} key={question.id} question={question} handleAnswerClick={handleAnswerClick}  />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (completedQuestionnaireId) => dispatch(FETCH_COMPLETED_QUESTIONNAIRE_QUESTIONS(completedQuestionnaireId))
  };
};

const mapStateToProps = state => {
  return{
    questions: state.questions,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FilQuestionnaire);