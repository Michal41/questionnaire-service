import React from 'react';
import EditQuestion from '../edit-question/edit-question.component';
import "./edit-questionnaire.styles.css"
import {connect} from 'react-redux';
import { CREATE_QUESTION, FETCH_QUESTIONS } from '../../reducers/root-reducer';

class EditQuestionnaire extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const questionnaire_id = this.props.match.params.id
    this.props.FetchQuestions(questionnaire_id)
  }

  handleQuesionComponentClick = (index) => {
    const questionsIds = this.props.questions.map(q => q.id )
    if (questionsIds.length === (index+1)){
      const questionnaire_id = this.props.match.params.id
      this.props.createQuestion(questionnaire_id);
    }
  }

  render(){
    const { questions } = this.props
    return(
      <div>
      <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Your Questionnaire</h1>
            </div>
      </section>
      <div className="center w-60">      
        {questions.map( (item,index) => (
          <EditQuestion 
            handleQuesionComponentClick={this.handleQuesionComponentClick} 
            key={index}
            index={index}
            id={item.id}
            content={item.content}
            answers={item.answers}
            match={this.props.match}

          />
        ))}
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: questionnaire_id => dispatch(CREATE_QUESTION(questionnaire_id)),
    FetchQuestions: questionnaire_id => dispatch(FETCH_QUESTIONS(questionnaire_id)),
  }
}
const mapStateToProps = state => ({ questions: state.questions })

export default connect(mapStateToProps,mapDispatchToProps)(EditQuestionnaire);
