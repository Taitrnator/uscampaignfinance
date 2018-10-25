import * as d3 from "d3";

const getStates = () => {
         const states = d3.json("https://unpkg.com/us-atlas@1/us/10m.json", (data) => {
             console.log(data)
         });
         return states;
}

export default getStates;