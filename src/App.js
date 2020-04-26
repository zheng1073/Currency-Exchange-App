// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './layout';
import Home from './home';
import HistChart from './histChart'
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/histChart" exact component={HistChart} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
