import React from 'react';
import {Link} from 'react-router-dom';
import headers from '../../utilis/apiHeader';
import { connect } from 'react-redux';
import { CREATE_QUESTIONNAIRE } from '../../reducers/root-reducer';

class NewQuestionnaire extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      description:""
    }
  }  

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.createQuestionnaire()
    event.preventDefault();
    const url = "/api/v1/questionnaires/create";
    const { name, description } = this.state;
    if (name.length == 0)
      return;

    const body = {
      name,
      description
    };
    this.props.createQuestionnaire(body)
  }

  render(){
    return(
      <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new questionaire
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="questionnaireName">Questionnaire name</label>
              <input
                type="text"
                name="name"
                id="questionnaireName"
                className="form-control"
                required
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>

            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn custom-button mt-3">
              Create Questionnaire
            </button>
            <Link to="/questionnaires" className="btn btn-link mt-3">
              Back to questionairess list
            </Link>
          </form>
        </div>
      </div>
    </div>
    )
  }

}
const mapDispatchToProps = dispatch => {
  return {
    createQuestionnaire: content => dispatch(CREATE_QUESTIONNAIRE(content))
  }
}

export default connect(null,mapDispatchToProps)(NewQuestionnaire);