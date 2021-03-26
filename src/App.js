// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
// import Movies from "./components/movies";
import Navbar from "./components/navbar";
import { render } from '@testing-library/react';

// class App extends Component {
//   state = { counters:[
//     {id:1,value:4},
//     {id:2,value:2},
//     {id:3,value:0},
//     {id:4,value:4},
//     {id:5,value:0},
// ] }
// handleIncrement=counter=>{
//   const counters = [...this.state.counters];
//   const index = counters.indexOf(counter);
  
//   counters[index] = {...counter};
//   counters[index].value++;
//   this.setState({ counters });

// }
// handleDelete=(counterId)=>{
//  //  console.log("Event Handler Called", counterId);
//  const counters = this.state.counters.filter( c => c.id !== counterId);
//  this.setState({counters: counters});
// };
// handleReset=()=>{
//   const counters= this.state.counters.map(c=>{
//       c.value=0;
//       return c;
//   });
//   this.setState({counters});
// };
//   render() { 
//     return (  
  //     <React.Fragment>
  //   <Navbar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
  // <main className="container">
  //  <Counters 
  //  counters={this.state.counters}
  //  onReset={this.handleReset}
  //  onDelete={this.handleDelete}
  //  onIncrement={this.handleIncrement}
  //  />
  // </main>

  // </React.Fragment>
//     );
//   }
// }
 
// export default App;

class App extends Component {
  state = { counters:[
    {id:1,value:5},
    {id:2,value:2},
    {id:3,value:0},
    {id:4,value:4},
    {id:5,value:0},
] }

  constructor(props){
    super(props)
    // console.log('App - Constructor', this.props);
    // this.state= this.props.something;
    console.log("App - Constructor");

  }

  componentDidMount(){
    //--Ajax Call--//
    // this.setState({movies})
    console.log('App - Mounted');
  }

  handleIncrement=counter=>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  
  }
  handleDecrement=counter=>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index]={...counter};
    counters[index].value--;
    this.setState({counters});
  }
  handleDelete=(counterId)=>{
    //  console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter( c => c.id !== counterId);
    this.setState({counters: counters});
   };
   handleReset=()=>{
     const counters= this.state.counters.map(c=>{
         c.value= 0;
         return c;
     });
     this.setState({counters});
   };

  render() { 
    console.log("App - Rendered")
    return ( 
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
    <main className="container">
     <Counters 
     counters={this.state.counters}
     onReset={this.handleReset}
     onDelete={this.handleDelete}
     onIncrement={this.handleIncrement}
     onDecrement={this.handleDecrement}
     />
    </main>
  
    </React.Fragment>
     );
  }
}
 
export default App;


