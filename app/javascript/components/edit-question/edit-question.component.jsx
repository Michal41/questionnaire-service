import React from 'react';
import EditQuestionAnswear from '../edit-question-answear/edit-question-answear.component';


class EditQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
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

  render() {
    return (
      <div 
        className="fl w-100 bg-light-green2 bt bw3 border-dark-green2 mt4"
        onBlur = {()=> console.log("asd")} 
      >
        <div className="fl f5 code pa2 tr pl2 mt3">
          1.
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
        <div className="fl pl3 pointer dim">
          <div className="fl f2 pa2 b font-light-green3 dim">&#43;</div>
          <div className="fl black-70 f4 pt3">Add options</div>
        </div>
      </div>

    )
  }

}



export default EditQuestion;
