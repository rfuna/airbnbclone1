import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        {/* Always going to render the header and footer but conditionally render the contents inside the switch depending on the url route */}
        <Switch>
          {/* /search route */}
          <Route path="/search">
            <SearchPage />
          </Route>

          {/* / home route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
