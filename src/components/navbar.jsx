import React, { Component } from 'react';
//--Stateless Function Component--/ sfc /

const Navbar = ({totalCounters}) => {
    console.log("NavBar - Rendered");
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
            Navbar <span className="badge badge-pill badge-secondary">
                {totalCounters}</span>
        </a>
     </nav>
     );
}
 
export default Navbar;

//--Class Method --//cc//
// class Navbar extends Component {
//     // state = {  }
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                <a href="#" className="navbar-brand">
//                    Navbar <span className="badge badge-pill badge-secondary">
//                        {this.props.totalCounters}</span>
//                </a>
//             </nav>
//          );
//     }
// }
 
// export default Navbar;