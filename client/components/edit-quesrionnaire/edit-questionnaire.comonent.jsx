import React, {useEffect} from 'react';
import EditQuestion from '../edit-question/edit-question.component';
import "./edit-questionnaire.styles.css"
import {connect} from 'react-redux';
import { CREATE_QUESTION, FETCH_QUESTIONS } from '../../reducers/root-reducer';

const EditQuestionnaire = (props) => {
  useEffect(() => {
    const questionnaire_id = props.match.params.id;
    props.FetchQuestions(questionnaire_id)
   }, []);
  const handleQuesionComponentClick = (index) => {
    const questions = props.questions.map(q => q.id )
    if (questions.length === (index+1)){
      const questionnaire_id = props.match.params.id
      props.createQuestion(questionnaire_id);
    }
  }
  const { questions } = props
  const sortedQuestions = questions.sort((a, b) => (a.id > b.id) ? 1 : -1);
  return(
  <div>
    <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Your Questionnaire</h1>
          </div>
    </section>
    <div className="center w-60">
      {sortedQuestions.map( (item,index) => (
        <EditQuestion
          handleQuesionComponentClick={handleQuesionComponentClick}
          index={index}
          key={item.id}
          id={item.id}
          content={item.content}
          answers={item.answers}
          match={props.match}
          lastAnswer={item.answers[item.answers.length -1 ]}
        />
      ))}
    </div>
  </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: questionnaire_id => dispatch(CREATE_QUESTION(questionnaire_id)),
    FetchQuestions: questionnaire_id => dispatch(FETCH_QUESTIONS(questionnaire_id)),
  }
}
const mapStateToProps = state => ({ questions: state.questions })

export default connect(mapStateToProps,mapDispatchToProps)(EditQuestionnaire);
