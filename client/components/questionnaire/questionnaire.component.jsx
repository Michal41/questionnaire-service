import React from 'react';


class Questionnaire extends React.Component{
  constructor(props){
    super(props);
    this.state = {Questionnaire:{name:""}};
  }
  
  
  componentDidMount(){
    const {match : {params: { id }}} = this.props;
    const url=`/api/v1/questionnaires/${id}`
    
    fetch(url).then(response => {
      if(response.ok){
        return response.json();
      }
        throw new Error("Network respose is not ok..");
    }).then(response=> {
      this.setState({Questionnaire:response})
    }).catch(()=>{this.props.history.push("/")})
  }


  render(){

    return(
      <div>
        single quesstionnaire
        <span>
          {this.state.Questionnaire.name}
        </span>
      </div>
    )
  }


}
export default Questionnaire