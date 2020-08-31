import React from 'react';


class Search extends React.Component {
      state = {term : ''};

      onInputSubmit = (event) => {
                  event.preventDefault();
                  this.props.onSubmit(this.state.term);
      }

      onInputChange = (event) => {
                  this.setState({term : event.target.value});
      }

      render() {
            return(
                  <div>
                  <form onSubmit={this.onInputSubmit}>
                        <input type="text" 
                        placeholder="Enter Movie or Series Name"
                        value = {this.state.term} 
                        onChange = {this.onInputChange}/>
                  </form>
                  </div>
            );
      }
}

export default Search;