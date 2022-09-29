import React from 'react';

class PersonalInfo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          title: '',
          start_datetime: '',
          location: '',
          submitted: false
        }
      }
      handleInput = (event) => {
        const name = event.target.name
        const newState = {}
        newState[name] = event.target.value
        this.setState(newState)
        event.preventDefault()
      }
      handleSubmit= (e)=>{
        e.preventDefault()
        if (this.state.submitted){
          this.setState({submitted:false})
        }else
          this.setState({submitted:true})
      }
      
      render () {
        if (this.state.submitted){
          return(
            <div className='personalInfo'>
              <div>Name: {this.state.title}</div>
              <div>Nascimento: {this.state.start_datetime}</div>
              <button type="button" className="button" onClick={this.handleSubmit}>Editar entradas</button>
            </div>
          );
        }
        else{
        return (
          <div className='personalInfo'>
            <h4>Informações Pessoais:</h4>
            <form onSubmit={this.handleSubmit} className="personalInfoForm">
              <input type="text" className="inputForm" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInput} />
              <input type="text" className="inputForm" name="start_datetime" placeholder="Date" value={this.state.start_datetime} onChange={this.handleInput} />
              <input type="text" className="inputForm" name="location" placeholder="Location" value={this.state.location} onChange={this.handleInput} />
              <button className="button"  type="submit">Confirmar Entradas</button>
            </form>
          </div>
        );
      }
    }
}

export default PersonalInfo;