/* const heading = React.createElement("h1", {id: "Heading", xyz: "ABC"}, "Hello World From React2...!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

*/
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I am h3 tag"),
        React.createElement("h2", {}, "I am h4 tag"),
    ]),

    
])
console.log(parent)

    const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


