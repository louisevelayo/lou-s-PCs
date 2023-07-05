import Main from "./layouts/Main";


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Main />
//     </div>

//   );
// }

// export default App;



import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  // Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/laptops" element={<Navbar />} />
          <Route path="/smartphones" element={<Footer />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}