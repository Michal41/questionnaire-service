import React from 'react';
import {Link} from "react-router-dom";
import {conect, connect} from 'react-redux';

class Questionnaires extends React.Component{
  constructor(props){
    super(props);
    this.state={ questionnaires:[] }
  };
  render(){
    const { questionnaires } = this.state;
    const allquestionnaires = questionnaires.map((questionnaire, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={require('../../assets/questionnaire.jpg')}
            className="card-img-top"
            alt={`${questionnaire.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{questionnaire.name}</h5>
            <Link to={`/questionnaires/show/${questionnaire.id}`} className="btn custom-button">
              View questionnaire
            </Link>
          </div>
        </div>
      </div>
    ));
    const noQuestionaire = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No Questionnaires yet. Why not <Link to="/new">create one</Link>
        </h4>
      </div>
    );

    return(
      <div>
        <div className="ba f2">{this.props.value}</div>
        <button onClick={this.props.increment}>increment</button>
         <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Questionnaires list</h1>
            <p className="lead text-muted">
            Together we will solve the age-old questionnaire problem. 
            upload in your questionnaire and solve another's one poll
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/questionnaires/new" className="btn custom-button">
                Create New questionnaire
              </Link>
            </div>
            <div className="row">
              {questionnaires.length > 0 ? allquestionnaires : noQuestionaire}
            </div>

            <Link to="/" className="btn custom-button">
                Home
            </Link>
          </main>
        </div>
      </div>
    )
  }

  componentDidMount(){
    const url="api/v1/questionnaires/index";
    fetch(url).then(response => {
      if(response.ok){
        return response.json();
      }
        throw new Error("Network response was not ok...")
    })
    .then(response=>{this.setState({questionnaires:response})})
    .catch(()=> this.props.history.push("/"));
  }

}

const mapStateToProps = state => ({ value: state.value })

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'counter/incremented' }),
    decrement: () => dispatch({ type: 'counter/decremented' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires)