
import React from 'react';
import EditQuestion from '../edit-question/edit-question.component';
import "./edit-questionnaire.styles.css"


const EditQuestionnaire = () => (
  <div>
    
    <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Your Questionnaire</h1>
          </div>
    </section>
    
    
    <div className="center w-60">


      <EditQuestion/>
      <EditQuestion/>
      <EditQuestion/>
      <EditQuestion/>



    </div>
  </div>
)

export default EditQuestionnaire;