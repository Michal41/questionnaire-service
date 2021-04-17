import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { FETCH_COMPLETED_QUESTIONNAIRE_QUESTIONS, SAVE_COMPLETED_QUESTIONS } from '../reducers/root-reducer';
import FillQuestion from './FillQuesion';

const FilQuestionnaire = (props) => {
  const params = useParams();
  const completedQuestionnaireId = params.id;
  const [filedQuestions, setFiledQuestions] = useState([]);
  const { fetchQuestions, questions, saveQuestions } = props;
  const filteredQuestions = questions.filter( question => question.content!='')

  useEffect( () =>{
    fetchQuestions(completedQuestionnaireId)
  }, [] )

  const handleAnswerClick = (answer_id, question_id) => {
    const anotherQuestions = filedQuestions.filter( item => item.question_id!==question_id )
    setFiledQuestions([...anotherQuestions, {question_id, answer_id}])
  }
  const highlightAnswers = filedQuestions.map(question => question.answer_id)
  return (
    <div>
      {filteredQuestions.map( (question) => (
        <FillQuestion highlightAnswers={highlightAnswers} key={question.id} question={question} handleAnswerClick={handleAnswerClick}  />
      ))}

      <div className="w-100 tc mt5"><button onClick={() => {saveQuestions({filedQuestions, completedQuestionnaireId});}} className='f1 btn custom-button w-30'> Save </button></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (completedQuestionnaireId) => dispatch(FETCH_COMPLETED_QUESTIONNAIRE_QUESTIONS(completedQuestionnaireId)),
    saveQuestions: (params) => dispatch(SAVE_COMPLETED_QUESTIONS(params)),
  };
};

const mapStateToProps = state => {
  return{
    questions: state.questions,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FilQuestionnaire);