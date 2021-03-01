import React from 'react';
import EditQuestion from '../edit-question/edit-question.component';
import "./edit-questionnaire.styles.css"
import {connect} from 'react-redux';
import { CREATE_QUESTION } from '../../reducers/root-reducer';

class EditQuestionnaire extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const questionnaire_id = this.props.match.params.id
    this.props.createQuestion(questionnaire_id);
  }

  handleQuesionComponentClick = (index) => {
    if (this.props.questionsIds.length === (index+1)){
      const questionnaire_id = this.props.match.params.id
      this.props.createQuestion(questionnaire_id);
    }
  }
  
  render(){
    const { questionsIds } = this.props
    return(
      <div>
      <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Your Questionnaire</h1>
            </div>
      </section>
      <div className="center w-60">
  
  
        
        {questionsIds.map( (id,index) => (
          <EditQuestion 
            handleQuesionComponentClick={this.handleQuesionComponentClick} 
            key={index}
            index={index}
            id={id}
          />
        ))}
        
  
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: questionnaire_id => dispatch(CREATE_QUESTION(questionnaire_id))
  }
}
const mapStateToProps = state => ({ questionsIds: state.questionsIds })

export default connect(mapStateToProps,mapDispatchToProps)(EditQuestionnaire);
