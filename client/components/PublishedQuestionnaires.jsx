import React from 'react'
import {Link} from "react-router-dom";

const PublishedQuestionnaires = () => {
  const questionnaires =[{name: 'name', id: "2"}, {name: 'names', id: "22"}]
  const allquestionnaires = questionnaires.map((questionnaire) => (
    <div key={questionnaire.id} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={require('../assets/questionnaire.jpg')}
          className="card-img-top"
          alt={`${questionnaire.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{questionnaire.name}</h5>
          <Link to={`/questionnaires/fill/${questionnaire.id}`} className="btn custom-button">
            Fill questionnaire
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Questionnaires list</h1>
          <p className="lead text-muted">
          Select a survey and fill it in
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="row">
            {questionnaires.length > 0 && allquestionnaires }
          </div>
        </main>
      </div>
    </div>
  );
};

export default PublishedQuestionnaires;