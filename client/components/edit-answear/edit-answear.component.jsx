import React from 'react'
import { connect } from 'react-redux'
import { HANDLE_ANSWER_CHANGE } from '../../reducers/root-reducer'

const EditAnswear = ({...props}) =>{
  const {answearContent, handleChange,handleAnswerChange, answerId, questionId} = props
  return(
    <div>
      <div className="fl w-100 h1 mt1"></div>
      <div className="fl pr4 pl2 h2 f4 gray">
        &#9675;
            </div>
      <div className="fl w-80">
        <input
          name='answear'
          type='text'
          placeholder=" answear"
          className="w-100 h bn foucs-border-green hover-border pa2"
          value={answearContent}
          onChange={(event) => handleAnswerChange({answerId, questionId, event})}
        >
        </input>
      </div>
      <div className="db fl w-10 h2">
        &nbsp;
      </div>
    </div>
)}
const mapDispatchToProps = dispatch => {
  return {
    handleAnswerChange: params => dispatch(HANDLE_ANSWER_CHANGE(params)),
  }
}
export default connect(null,mapDispatchToProps)(EditAnswear);