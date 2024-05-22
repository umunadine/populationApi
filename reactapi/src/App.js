import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      items : [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(res => res.json())
      .then(json =>{
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

 

  render() {
    var {isLoaded, items} = this.state;
    if(!isLoaded) {
        return <div>Loading</div>
    }
    else {
      return (

      <div>
        <h1>United States Population over the years</h1>

        <div className="App">
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nation</th>
                  <th scope="col">Year</th>
                  <th scope="col">Population</th>
                </tr>
              </thead>
              <tbody>
                {
              items.data.map(item => (
                <tr >
                <th scope="row" key={item.id} > {item.Nation}</th>
                  <td>{item.Year}</td>
                  <td>{item.Population}</td>
                </tr>
              ))
            }
                  

              </tbody>
          </table>
        </div>
        </div>
      );

    }
    
  }

}
export default App;