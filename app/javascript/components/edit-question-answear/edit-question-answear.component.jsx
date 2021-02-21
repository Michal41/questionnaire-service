import React from 'react'


const EditQuestionAnswear = ({...props}) =>{
  const {answearContent, handleChange, id} = props
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
          onChange={(event) => handleChange(event,id)}
        >
        </input>
      </div>
      <div className="db fl w-10 h2">
        &nbsp;
      </div>
    </div>
)}

export default EditQuestionAnswear;