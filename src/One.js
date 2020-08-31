import React from 'react';
import axios from 'axios';


export default class One extends React.Component {
  state = {
    persons: [],
    term:''
  }

  componentDidMount() {
     return
  }


OnInputSubmit = e =>{
e.preventDefault();
axios.get('http://www.omdbapi.com/'
     ,{
      params : {
        i:'tt3896198',
        apikey:'5232631',
        t : this.state.term,
      }
    })
      .then(res => {
        const persons  = res.data;
        this.setState({ persons });
      })

}

render(){
  return(

    <div>
      <form onSubmit={this.OnInputSubmit}>
        <input type = 'text' placeholder="Enter the movie name " value={this.state.term} onChange={e => this.setState({term:e.target.value})}/>
      </form>
      <br/>
      <img src ={this.state.persons.Poster}/><br/><br/>
      <table align="center">
        
        <div><tr><th>{this.state.persons.Error ? 'Sorry, Movie Not Found  ' : ''}</th></tr></div>
        <div><tr><th>{this.state.persons.Title ? 'Name : ' : ''}</th><th>{this.state.persons.Title}</th></tr></div>
        <div><tr><th>{this.state.persons.Year ? 'Year : ' : ''}</th><th>{this.state.persons.Year}</th></tr></div>
        <div><tr><th>{this.state.persons.Released ? 'Released : ' : ''}</th><th>{this.state.persons.Released}</th></tr></div>
        <div><tr><th>{this.state.persons.Runtime ? 'Runtime : ' : ''}</th><th>{this.state.persons.Runtime}</th></tr></div>
        <div><tr><th>{this.state.persons.Title ? 'Genre : ' : ''}</th><th>{this.state.persons.Genre}</th></tr></div>
        <div><tr><th>{this.state.persons.Director ? 'Director : ' : ''}</th><th>{this.state.persons.Director}</th></tr></div>
        <div><tr><th>{this.state.persons.Actors ? 'Actors : ' : ''}</th><th>{this.state.persons.Actors}</th></tr></div>
        <div><tr><th>{this.state.persons.Plot ? 'Plot: ' : ''}</th><th>{this.state.persons.Plot}</th></tr></div>
        <div><tr><th>{this.state.persons.Language ? 'Language : ' : ''}</th><th>{this.state.persons.Language}</th></tr></div>
        <div><tr><th>{this.state.persons.BoxOffice ? 'BoxOffice : ' : ''}</th><th>{this.state.persons.BoxOffice}</th></tr></div>
        <div><tr><th>{this.state.persons.Production ? 'Production : ' : ''}</th><th>{this.state.persons.Production}</th></tr></div>
      </table>
      </div>
      
  
  )}
}
