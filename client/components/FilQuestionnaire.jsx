import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { FETCH_COMPLETED_QUESTIONNAIRE_QUESTIONS } from '../reducers/root-reducer';

const FilQuestionnaire = (props) => {
  const params = useParams();
  const completedQuestionnaireId = params.id;
  const { fetchQuestions, questions } = props;
  useEffect( () =>{
    fetchQuestions(completedQuestionnaireId)
  }, [] )
  console.log(questions)
  return (
    <div
      className="w-80 bg-light-green2 bt bw3 border-dark-green2 mt4 center"
    >
      <div className="fl f5 code pa2 tr pl2 mt3">
        2
      </div>
      <div className="fl w-100 h1 mt1"></div>
      <div className="fl pr4 pl2 h2 f4 gray pointer">
        &#9675;
      </div>
        <div className="fl w-80">
          <div
            className="w-100 h foucs-border-green border shadow-2 pointer pa2"
        >
            2
        </div>
      </div>
      <div className="db fl w-10 h2">
        &nbsp;
      </div>
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