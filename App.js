// const heading = React.createElement("h1", {}, "Namaste Everyone 🔥 ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root  using render method
// root.render(heading);

// [timestamp = 1:41:00]
// adding more stuff to the html
const heading1 = React.createElement("h1", { key: "1" }, "Heading 1 ");
const heading2 = React.createElement("h2", { key: "2" }, "Heading 2 ");
const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);