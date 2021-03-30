import React from 'react';
import { CREATE_ANSWER, HANDLE_ANSWER_CHANGE, HANDLE_QUESTION_CHANGE, UPDATE_QUESTION } from '../../reducers/root-reducer';
import headers from '../../utilis/apiHeader';
import EditQuestionAnswear from '../edit-answear/edit-answear.component';
import { connect } from 'react-redux';

const EditQuestion = (props) => {
  const { handleQuesionComponentClick, index } = props; 
  const answers = props.answers.sort((a, b) => (a.id > b.id) ? 1 : -1);

  const handleAddAnswear = () => {
    const questionnaire_id = props.match.params.id
    const body = {
      questionId: props.id,
      questionnaire_id: questionnaire_id,
    };
    props.addAnswer(body);
  }

  const handleUpdateQuestion = () => {
    const questionnaire_id = props.match.params.id
    const body = {
      content: props.content,
      answers: props.answers,
      questionId: props.id,
      questionnaire_id: questionnaire_id,
    };
    props.updateQuestion(body)
  }
  return (
    <div 
      className="fl w-100 bg-light-green2 bt bw3 border-dark-green2 mt4"
      onClick={() => handleQuesionComponentClick(index)}
      onBlur={()=> handleUpdateQuestion()}
    >
      <div className="fl f5 code pa2 tr pl2 mt3">
        {index + 1}.
      </div>
      <div className="center w-90 relative mt3">
        <input
          name='question'
          type='text'
          placeholder=" question"
          value={props.content}
          className="w-100 h pa2 bn foucs-border-green hover-border"
          onChange = {(event) => props.handleQuestionChange({ event, questionId: props.id })}
        />
        {answers.map(answer => (
          <EditQuestionAnswear 
            key={answer.id}
            answearContent={answer.content}
            answerId={answer.id}
            questionId={props.id}
          />
          ))}

      </div>
      <div className="fl w-100"></div>
      <div onClick = {handleAddAnswear} className="fl pl3 pointer dim">
        <div className='flex items-center'>
          <div className="fl f2 pa2 b font-light-green3 dim">&#43;</div>
          <div className="fl black-70 f4 mt1">Add options</div>
        </div>
      </div>
    </div>
  )  
};
const mapDispatchToProps = dispatch => {
  return {
    updateQuestion: content => dispatch(UPDATE_QUESTION(content)),
    addAnswer: params => dispatch(CREATE_ANSWER(params)),
    handleQuestionChange: params => dispatch(HANDLE_QUESTION_CHANGE(params)),
  }
}


export default connect(null,mapDispatchToProps)(EditQuestion);
