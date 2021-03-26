import React, { Component } from 'react';
class Counter extends Component {
    // state = { 
    //     count:this.props.counter.value
    //     // tags: []
    //  };
    //  styles = {
    //      fontSize: 30,
    //      fontWeight: "bold"
    //  };
    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    //     return <ul>
    //     {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
    // </ul>
    // }

    // constractor(){
    //     super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    // }


    // handleIncrement=()=>{
    //     // console.log(product);
    //     // this.state.count;
    //     this.setState({count: this.state.count + 1});
    // };
    // doHandleIncrement=()=>{
    //     this.handleIncrement({ id:1 })
    // };

    render() { 
        console.log("Counter - Rendered")
        // console.log(this.props.children);
        // React.createElement
        return (<div className="row">
            <div className="col-1 m-2">
            <span className={this.getBadgeClasses()}>{this.props.counter.value }</span>

            </div>
            <div className="col">
            <button 
            onClick={()=> this.props.onIncrement(this.props.counter.value++ )}
            // onClick={()=> this.handleIncrement({id:1})} 
            className="btn btn-secondary btn-md m-2"> + </button>
            <button 
            onClick={()=> this.props.onDecrement(this.props.counter.value-- )}
            // onClick={()=> this.handleIncrement({id:1})} 
            className="btn btn-secondary btn-md m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : "" }
            >-</button>
            {/* --Delete Button-- */}
            <button onClick={()=> this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm">
                Delete
            </button>

            </div>
            {/* {this.props.children} */}
            {/* <h4>{this.props.id}</h4> */}
           
            
            {/* { this.state.tags.length === 0 && "Please add a new tag!" }
            {this.renderTags()} */}
        </div>);
    }
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;