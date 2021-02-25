
import React from 'react';
import headers from '../../utilis/apiHeader';
import EditQuestion from '../edit-question/edit-question.component';
import "./edit-questionnaire.styles.css"


class EditQuestionnaire extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionsIds: []
    }
  }

  componentDidMount(){
    this.createQuestion();
  }
  createQuestion = () => {
    var questionsIds = this.state.questionsIds;
    const url = "/api/v1/questions";
    const body = {
      questionnaire_id: this.props.match.params.id
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
      .then(response => {
        questionsIds.push(response.id)
        this.setState({questionsIds: questionsIds})
      })
      .catch(error => console.log(error.message));
  }

  handleQuesionComponentClick = (index) => {
    if (this.state.questionsIds.length === (index+1)){
      this.createQuestion();
    }
  }
  
  render(){
    const { questionsIds } = this.state
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

export default EditQuestionnaire;
