import DateTime from "../../Components/date-time";
import { NavLink } from "react-router-dom";
import "./style.css";

const PracticePage = () => {
  let navLinkStyles = {
    // textDecoration: "none",
    color: "white",
  };
  let myName = "Salim Ullah";
  let myAge = 26;

  return (
    <>
      <div className="main-container">
        <ol>
          <li>
            <b>React: </b>
            <ul>
              <li>is a js library.</li>
              <li>used for building user interfaces.</li>
              <li>used for building single page applications.</li>
              <li>used to create reusable UI components.</li>
              <li>react is a declarative approach</li>
              <li>
                it,s developed by facebook software engineer Jordan Walke in
                2011
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>Library: </b> is the collection of functions or reusable code use
            to solve a particular problem or provide a spacifice functionality.
          </li>
          <br />
          <li>
            <b>Framework: </b> set of tools provide a structured way to build
            web applications.
          </li>
          <br />
          <li>
            <b>Single page application: </b>the apps that doesn’t reload the
            entire application during jumping from one page to another or when I
            clicked on a component so it’s opened directly mean that doesn’t
            reload the entire page.
          </li>
          <br />
          <li>
            <b>Imperative approach: </b> here you need to give the work details
            mean HOW this work do. <br />
            here we give step by step instructions Like. <br />
            <br />
            <pre>
              const div = document.createElement("div"); <br />
              div.className = "container"; <br />
              div.innerText = "Hello World"; <br />
              document.body.appendChild(div);
            </pre>
          </li>
          <br />
          <li>
            <b>Declarative approach: </b> Here we declare WHAT we want, the
            implementation details (HOW) are handled automatically. <br />
            here just declare what we want like. <br /> <br />
            <pre>
              &lt;div className = "container" &gt; <br />
              &nbsp; Hello World <br />
              &lt;/div&gt;
            </pre>
          </li>
          <br />
          <li>
            <b>Babel:</b> is a javascript compiler used to convert React code
            into a Plain JavaScript format which understand by browser.
          </li>
          <br />
          <li>
            <b>Why do we use React?: </b> Use to create an interactive and
            dynamic user interface.
          </li>
          <br />
          <li>
            <b>Interactive user interface: </b> the user can interaction with a
            software application through various elements such as clicking a
            button, input fields, checkboxes, radio buttons or dropdown menus
            etc.
          </li>
          <br />
          <li>
            <b>Dynamic user interface: </b> can update its content without
            reload the entire page.
          </li>
          <br />
          <li>
            <b>How we run react code?: </b> We need to install node.js runtime
            environment and NPM and some other steps to follow for react
            running.
          </li>
          <br />
          <li>
            <b>npm (Node Package Manager): </b> a standard package manager for
            nodejs. where the million of libraries is installed which is
            required for our projects. npm installs, updates and manages the
            dependencies of our project.
          </li>
          <br />
          <li>
            <b> Create-React-Apps: </b> a build tool used for quickly set up a
            new react project With predefined folders.
          </li>
          <br />
          <li>
            <b>creating new project usig Create-React-Apps:</b> <br />
            the steps to create new react project.
            <ul className="list-disc">
              <li>you must have installed nodejs and npm on your system.</li>
              <li>
                <b>npx create-react-app my-app:</b> run this command in
                terminal.
              </li>
              <li>
                <b>cd my-app:</b> run this command in terminal to navigat the
                directory
              </li>
              <li>
                <b>npm start: </b> run this command in terminal to display your
                project in browser.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>Vite: </b> a modern build tool that's much faster than
            create-react-app. <br />
            It starts the project quickly and updates the changes quickly.
            <br />
            It uses newer technology that makes coding faster and more
            efficient.
          </li>
          <br />
          <li>
            <b>creating new project usig Vite:</b> <br />
            the steps to create new react project.
            <ul className="list-disc">
              <li>you must have installed nodejs and npm on your system.</li>
              <li>
                <b>
                  npm create vite@latest: OR npm create vite@latest my-react-app
                  -- --template react:
                </b>
                <br />
                run this command in terminal. <br />
              </li>
              <li>
                <b>cd my-react-app: </b> run this command in terminal to navigat
                the directory
              </li>
              <li>
                <b>npm install: </b> run this command in terminal to install the
                required dependencies.
              </li>
              <li>
                <b>npm run dev: </b> run this command in terminal to display
                your project in browser.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>DOM: </b> When a browser loads a web page, it parses the HTML
            document (elements & attributes) and creates a tree structure called
            the DOM.
          </li>
          <br />
          <li>
            <b>React Virtual DOM: </b> it’s a lightweight copy of the actual DOM
            stored in memory as a JavaScript objects. React uses it to
            efficiently update only changed parts of the actual DOM, making web
            apps faster.
          </li>
          <br />
          <li>
            <b>How React Renders HTML Code?: </b>Step by step procedure. <br />
            <ul className="list-disc">
              <li>
                <b>JSX code: </b> is a js syntax through which we write HTML
                code directly within JavaScript files when building react
                applications.
              </li>
              <li>
                <b>React.createElement(): </b> a function call that converts JSX
                elements into JavaScript objects.
              </li>
              <li>
                <b>Virtual DOM Objects: </b> every individual element of Virtual
                DOM is represent in the form of object which is called Virtual
                DOM Objects.
              </li>
              <li>
                <b>Diffing Algorithm: </b> it creates new Virtual DOM and
                compares it with the old one, and find what the changes between
                them.
              </li>
              <li>
                <b>Reconciliation: </b> It’s apply the changes to actual DOM
                which finds through Diffing Algorithm.
              </li>
              <li>
                <b>Browser Displays Updated UI: </b> The final rendering phase
                where the browser takes React's DOM updates and visually
                displays them on screen.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>Components: </b> it’s independent and reusable piece of code. It
            creates a complex UIs from small and deferent piece of code. It can
            be simple elements like div, buttons or input fields or can be more
            complex elements like navigation bars, modals, or sections and a
            complete separate page also a component. <br />
            thier have two types of component.
            <ul className="list-disc">
              <br />
              <li>
                <b>Class Component: </b> These components are simple classes
                which include multiple methods that add functionality to
                application. All class components are child classes for the
                component class of react.js (React.Compnent). <br /> <br />
                <pre>
                  import React, &#123; Component &#125; from 'react'; <br />
                  class Greeting extends Component &#123; <br />
                  render() &#123; <br />
                  return &lt;h1&gt;Hello world this is class
                  component&lt;/h1&gt; <br />
                  &#125; <br />
                  &#125; <br />
                </pre>
                <b>Render() method: </b> Through this method react display the
                jsx code to the Web page.
              </li>
              <br />
              <li>
                <b>Functional Component: </b> it’s like a functions that return
                HTML elements. <br />
                <pre>
                  function Greeting() &#123; <br />
                  return &lt;h1&gt;Hello world this is functional
                  component&lt;/h1&gt; <br />
                  &#125; <br />
                </pre>
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>JSX Fragments (&lt;&gt; &lt;/&gt;): </b> is a feature in React
            that allow you to group a list of children without adding extra
            nodes to the DOM. They are useful when you need to return multiple
            elements from a component's render method without wrapping them in
            an additional HTML element.
          </li>
          <br />
          <li>
            <b>JavaScript Expration &#123; &#125; : </b> used to write
            javascript code inside jsx with the help of '&#123; &#125;' curly
            braces like.
            <pre>
              let myName = "Salim Ullah" <br />
              &lt;h4&gt; my name is &#123; myName &#125; &lt;/h4&gt; result
              <h4>my name is {myName}</h4>
            </pre>
          </li>
          <br />
          <li>
            <b>Template Literals ` ` : </b> used to write javascript variables
            inside string like.
            <pre>
              let myName = "Salim Ullah" <br />
              let myAge = 26; <br />
              &lt;h4&gt; &#123; `my name is $&#123; myName &#125; and i am
              $&#123; myAge &#125; years old ` &lt;/h4&gt; result
              <h4>{`my name is ${myName} and i am ${myAge} years old `}</h4>
            </pre>
          </li>
          <br />
          <li>
            <b>Named Export module: </b> are used to expose (send) multiple
            variables, functions, or components into other files like.
            <pre>
              let name = "Salim Ullah"; <br />
              let age = 26; <br />
              function greet() &#123; <br />
              &nbsp; return "Hello! Welcome to the React world."; <br />
              &#125; <br />
              export &#123; name, age, greet &#125;; <br />
            </pre>
            rules for named export: <br />
            1. close it with curly braces &#123; &#125; while exporting. <br />
            2. while importing the named exports, you must use the exact names.{" "}
            <br />
            3. You can export multiple variables, functions, or components from
            a single file. <br />
          </li>
          <br />
          <li>
            <b> Default Export module: </b> is used to expose (send) only one
            variable, function, or component into other files like.
            <pre>
              let name = "Salim Ullah"; <br />
              let age = 26; <br />
              function greet2() &#123; <br />
              &nbsp; return "Hello! Welcome to the React world."; <br />
              &#125; <br />
              export default greet2; <br />
            </pre>
            rules for default export: <br />
            1. while exporting the default export, you need to use the keyword
            'default'. <br />
            2. while importing the default export, you can use any name you
            like. <br />
            3. You can export only one default export from a single file. <br />
          </li>
          <br />
          <li>
            <b> Import module: </b> is used to receive the exported variables,
            functions, or components from other files like.
            <pre>
              // Named Export Import <br />
              import &#123; name, age, greet &#125; from './moduleFile'; <br />
              // Default Export Import <br />
              import greet2 from './moduleFile'; <br />
            </pre>
            rules for Import module: <br />
            1. while importing the named exports, you must use the exact names
            with curly braces &#123; &#125;. <br />
            2. while importing the default export, you can use any name you like
            without curly braces. <br />
          </li>
          <br />
          <li>
            <b>Props: </b> Props are use to pass data from parent component to
            child component. They allow components to be dynamic and reusable by
            accepting different values for rendering.
          </li>
          <br />
          <li>
            <b>: </b>
          </li>
          <br />
          <li>
            <b>: </b>
          </li>
          <br />
          <li>
            <b>: </b>
          </li>
          <br />
        </ol>

        <DateTime />

        <nav>
          <ul>
            <li>
              <NavLink to="/greeting" target="_blank" style={navLinkStyles}>
                Greeting page
              </NavLink>
            </li>

            <li>
              <NavLink to="/calculation" target="_blank" style={navLinkStyles}>
                Calculation Page
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/netflix-series"
                target="_blank"
                style={navLinkStyles}
              >
                Netflix Sereis Page
              </NavLink>
            </li>
          </ul>
        </nav>

        <br />
        <br />
      </div>
    </>
  );
};

export default PracticePage;
