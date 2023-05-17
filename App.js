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

//JSX
const jsxHeading = (<h1>
    Namste dev</h1>
);

// Functional Component
const Title = () => <h1>Title Component</h1>

// Component composition
const Heading = () =>(
    <div>
        {/*we can write any piece of js code inside this curly braces */}
        {jsxHeading}
        {Title()}
        <Title/>
        <h1>This is a functional component</h1>
    </div>
)

//We can create react element using JSX also
console.log(parent,jsxHeading);
// babel job:
// JSX => React.createElement => React Element (Object) => HTMLElement (render)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// root.render(<Heading/>);

// render method basically convert this object to html tags
// ReactElement(Object) => HTML(Browser Understands)
// if let say there is something inside of html tag with root id but root.render will replace those things
