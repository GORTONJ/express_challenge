import React from 'react';
import './App.css';

class App extends React.Component{

  state = {  
    movies: [],  
  } 


  async componentDidMount() {
      let response = await fetch('http://penguin.linux.test:3001/movies')
      let data = await response.json()      
        console.log(data[0])
      let tempArray = []  

        data.forEach(movie => {
          tempArray.push(movie.title)
        })

        this.setState( {movies: tempArray} )
  }    
  
  render(){
    const {movies} = this.state
    return (    

        <div className="App">
          <header className="App-header">
          <h2>GMDB</h2>
          <ul id="navigation">        
            <li>Home</li>
            <li>Login</li>
            <li>
              <input type="text" placeholder="Search"/>
              <button type="submit">Search</button>
            </li>
          </ul>       
          </header> 
          <div>
            {this.state.movies}
          </div>
        </div>
      );
  }
  
}

export default App;
