// import * as React from 'react';
// import * as d3 from 'd3';
// import * as topojson from 'topojson';
// import * as _ from 'lodash';
// import getStates from './getStates'
// import State from './State';
//
// class DataMap extends React.Component {
//
//     constructor() {
//         super();
//         this.state = { us: [] };
//         this.generateStatePath = this.generateStatePath.bind(this);
//     }
//
//     componentDidMount() {
//         getStates()
//             .then((data) => {
//                 console.log(data)
//                 this.setState({
//                     us: data.objects.states
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//               });
//                     // // store the data in state
//
//                     //
//                     // // I prefer to use Redux for state management - if you're taking
//                     // // that approach this would be a good place to dispatch an action, i.e.
//                     // // this.props.dispatch(actions.sendAPIDataToReducer({ us }))
//
//     }
//
//     // let's define a method for rendering paths for each state
//     generateStatePath(geoPath, data) {
//         const generate = () => {
//             let states = _.map(data, (feature, i) => {
//
//                 return (
//                     <State stateName={feature.properties.stateName} path={path} key={i} />
//                 );
//             });
//             console.log(states);
//             return states;
//         }
//
//         let statePaths = generate();
//         return statePaths;
//     }
//
//     render() {
//
//         // create a geographic path renderer
//         let geoPath = d3.geoPath();
//         let data = this.state.us; // or, the reference to the data in the reducer, whichever you are using
//
//         // call the generateStatePaths method
//         let statePaths = this.generateStatePath(geoPath, data.geometries);
//
//         return (
//             <svg id='map-container'>
//                 <g id='states-container'>
//                     {statePaths}
//                 </g>
//             </svg>
//         );
//     }
// }
// export default DataMap;