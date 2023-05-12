import React from 'react'; // refer to node modules react
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1", // type of tag
    {id: "heading",xyz: "abc"}, // attributes
    "Hello World from React" // childrens
);

console.log(heading);
// react element is nothing but normal js objects
// props are attributes + children

//nested tags and siblings in react
const children1 = React.createElement("div",{id: "children1"},"child1")
const children2 = React.createElement("div",{id: "children2"},"child2")
const parent = React.createElement("div",{id: "parent"},[children1,children2]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// render method basically convert this object to html tags
// ReactElement(Object) => HTML(Browser Understands)
// if let say there is something inside of html tag with root id but root.render will replace those things
