
import React from 'react';
import EditQuestion from '../edit-question/edit-question.component';
import "./edit-questionnaire.styles.css"



class EditQuestionnaire extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionsCount : 1
    }
  }

  handleQuesionComponentClick = (questionNumber) => {
    const questionsCount = this.state.questionsCount;
    if (questionNumber === (questionsCount-1)){
      this.setState({ questionsCount: questionsCount + 1 });
    }
  }
  const 
  render(){
    const { questionsCount } = this.state
    return(
      <div>
    
      <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Your Questionnaire</h1>
            </div>
      </section>
      <div className="center w-60">
  
  
        
        {[...Array(questionsCount).keys()].map( key => (
          <EditQuestion 
            handleQuesionComponentClick={this.handleQuesionComponentClick} 
            key={key}
            questionNumber={key}
          />
        ))}
        
  
      </div>
    </div>
    )
  }
}

export default EditQuestionnaire;
