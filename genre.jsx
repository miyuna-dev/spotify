// // import React from "react";
// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// export class Genre extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }

//     render() {

//         return <div>
//             <div className="App">
//                 <header className="App-header">
//                     <label htmlFor="genre">genre</label>
//                     <select name="genre" id="genre">
//                         {
//                             genre.map((element) => {
//                                 return (
//                                     <option value={element.id}>{element.name}</option>)
//                             })
//                         }
//                     </select>
//                     <div className="container">
//                         <div className="row mt-5 mb-5">
//                             <div className="col col-sm-2">&nbsp;</div>
//                             <div className="col col-sm-8">
//                                 <div className="dropdown">
//                                     <input type="text" onChange={(event) => setTitle(event.target.value)} name="search_box" className="form-control form-control-lg" placeholder="Type Here..." id="autocomplete" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
//                                     <input type="submit"></input>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//             </div>
//         </div>
//     }

// }