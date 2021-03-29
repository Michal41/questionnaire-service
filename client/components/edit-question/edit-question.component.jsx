import React from 'react';
import { CREATE_ANSWER, HANDLE_ANSWER_CHANGE, UPDATE_QUESTION } from '../../reducers/root-reducer';
import headers from '../../utilis/apiHeader';
import EditQuestionAnswear from '../edit-answear/edit-answear.component';
import { connect } from 'react-redux';

class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.content,
      answers:[...props.answers]
    }
  }
  questionHandleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  answearHandleCHange = (event,key) => {
    console.log(key)
    const answers = this.state.answers;
    answers[key] = {id:answers[key].id, content:event.target.value}
    this.setState({answers:answers})
  } 
  handleAddAnswear = () => {
    const questionnaire_id = this.props.match.params.id
    const body = {
      questionId: this.props.id,
      questionnaire_id: questionnaire_id,
    };
    this.props.addAnswer(body);
  }

  handleUpdateQuestion = () => {
    const questionnaire_id = this.props.match.params.id
    const body = {
      content: this.props.question,
      answers: this.props.answers,
      questionId: this.props.id,
      questionnaire_id: questionnaire_id,
    };
    this.props.updateQuestion(body)
  }

  render(){
    const { handleQuesionComponentClick, index } = this.props; 
    const answers = this.props.answers.sort((a, b) => (a.id > b.id) ? 1 : -1);
    return (
      <div 
        className="fl w-100 bg-light-green2 bt bw3 border-dark-green2 mt4"
        onClick={() => handleQuesionComponentClick(index)}
        onBlur={()=> this.handleUpdateQuestion()}
      >
        <div className="fl f5 code pa2 tr pl2 mt3">
          {index + 1}.
        </div>
        <div className="center w-90 relative mt3">
          <input
            name='question'
            type='text'
            placeholder=" question"
            value={this.state.question}
            className="w-100 h pa2 bn foucs-border-green hover-border"
            onChange = {this.handleAnswerChange}
          />
          {answers.map(answer => (
            <EditQuestionAnswear 
              key={answer.id}
              answearContent={answer.content}
              answerId={answer.id}
              questionId={this.props.id}
            />
            ))}

        </div>
        <div className="fl w-100"></div>
        <div onClick = {this.handleAddAnswear} className="fl pl3 pointer dim">
          <div className='flex items-center'>
            <div className="fl f2 pa2 b font-light-green3 dim">&#43;</div>
            <div className="fl black-70 f4 mt1">Add options</div>
          </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    updateQuestion: content => dispatch(UPDATE_QUESTION(content)),
    addAnswer: params => dispatch(CREATE_ANSWER(params)),
    handleAnswerChange: params => dispatch(HANDLE_ANSWER_CHANGE(params)),
  }
}

export default connect(null,mapDispatchToProps)(EditQuestion);
