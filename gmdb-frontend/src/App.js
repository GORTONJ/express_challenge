import React from 'react';
import './App.css';

class App extends React.Component{

  state = {  
    movies: [],  
    error: "" 
  }
  
  async componentDidMount() {
      let response = await fetch('http://penguin.linux.test:3001/movies')
      let data = await response.json()
        console.log(data)
        this.setState( {movies: data} )
    }  

  render(){

    return (    

        <div className="App">
          <header className="App-header">
          <h2>GMDB</h2>
          <ul id="navigation">        
            <li><a href="news.asp">Home</a></li>
            <li><a href="contact.asp">Login</a></li>
            <li>
              <input type="text" placeholder="Search"/>
              <button type="submit">Search</button>
            </li>
          </ul>       
          </header>          
          
          <div>
            {this.state.movies[0]}
            {this.state.error}
          </div>

        </div>
      );
  }
  
}

export default App;
