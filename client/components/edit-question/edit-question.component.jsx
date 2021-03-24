import React from 'react';
import { UPDATE_QUESTION } from '../../reducers/root-reducer';
import headers from '../../utilis/apiHeader';
import EditQuestionAnswear from '../edit-answear/edit-answear.component';
import { connect } from 'react-redux';

class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.content,
      answears:[{content:""},{content:""}]
    }
  }
  questionHandleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  answearHandleCHange = (event,key) => {
    const answears = this.state.answears;
    answears[key] = {content:event.target.value}
    this.setState({answears:answears})
  } 
  handleAddAnswear = () => {
    const answears = this.state.answears;
    answears.push({content:''})
    this.setState({answears: answears})
  }

  handleUpdateQuestion = () => {
    const body = {
      content: this.state.question,
      answears: this.state.answears,
      id: this.props.id
    };
    this.props.updateQuestion(body)
  }

  render(){
    const { handleQuesionComponentClick, index } = this.props; 
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
            onChange = {this.questionHandleChange}
          />
          
          {this.state.answears.map(answear => (
            <EditQuestionAnswear 
              key={this.state.answears.indexOf(answear)}
              answearContent={answear.content}
              handleChange={this.answearHandleCHange} 
              id={this.state.answears.indexOf(answear)}
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
    updateQuestion: content => dispatch(UPDATE_QUESTION(content))
  }
}

export default connect(null,mapDispatchToProps)(EditQuestion);
