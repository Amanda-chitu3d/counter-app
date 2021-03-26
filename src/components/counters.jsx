import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    // componentDidUpdate(prevProps, prevState){
    //     console.log("prevProps", prevProps);
    //     console.log("prevState", prevState);
    //     if(prevProps.counter.value !== this.props.counter.value){
    //         //--Ajax call and get new data from the server--//
    //     }

    // }

    // componentWillUnmount(){
    //     console.log("Counter - Unmount")
    // }
    // state = { 
    //     counters:[
    //         {id:1,value:4},
    //         {id:2,value:2},
    //         {id:3,value:0},
    //         {id:4,value:4},
    //         {id:5,value:0},
    //     ]
    //  }
    //  handleIncrement=counter=>{
    //      const counters = [...this.state.counters];
    //      const index = counters.indexOf(counter);
         
    //      counters[index] = {...counter};
    //      counters[index].value++;
    //      this.setState({ counters });

    //  }
    //  handleDelete=(counterId)=>{
    //     //  console.log("Event Handler Called", counterId);
    //     const counters = this.state.counters.filter( c => c.id !== counterId);
    //     this.setState({counters: counters});
    //  };
    //  handleReset=()=>{
    //      const counters= this.state.counters.map(c=>{
    //          c.value=0;
    //          return c;
    //      });
    //      this.setState({counters});
    //  };
    render() { 
        console.log("Counters - Rendered")
        const {onReset, onDelete,onIncrement, onDecrement, counters}=this.props;
        return ( 
            <div className="container">
                <button 
                //    onClick={this.handleReset}
                onClick={onReset}
                   className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => 
                <Counter 
                key={counter.id} 
                // onDelete={this.handleDelete}
                onDelete={onDelete}
                // onIncrement={this.handleIncrement}
                onIncrement={onIncrement}
                counter={counter}
                onDecrement={onDecrement}
                // value={counter.value} 
                // id={counter.id}
                // selected={true}
                >
                    {/* <h4>Counter #{counter.id}</h4> */}
                    </Counter>
                )}
                {/* <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter /> */}
            </div>
         );
    }
}
 
export default Counters;