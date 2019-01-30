const view = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello World!"),
  React.createElement("h2", null, "Things I need to do:"),
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Learn React"),
    React.createElement("li", null, "Climb Mt. Everest"),
    React.createElement("li", null, "Go to the gym"),
    React.createElement("li", null, "Feed my dog")
  ),
  React.createElement("p", null, "In that order ^")
);
ReactDOM.render(view, document.getElementById("app"));
