
import React from 'react';
import headers from '../../utilis/apiHeader';
import EditQuestion from '../edit-question/edit-question.component';
import "./edit-questionnaire.styles.css"



class EditQuestionnaire extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionsIds: [1,2,5,6]
    }
  }

  handleQuesionComponentClick = (index) => {
    const questionsIds = this.state.questionsIds;
    if (questionsIds.length === (index+1)){
      
      const url = "/api/v1/questions/create";
      const questionnaire_id = 1

      const body = {
        questionnaire_id: questionnaire_id
      };
  
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => console.log(response))
        .catch(error => console.log(error.message));
    }
  }
  const 
  render(){
    const { questionsCount, questionsIds } = this.state
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
          />
        ))}
        
  
      </div>
    </div>
    )
  }
}

export default EditQuestionnaire;
