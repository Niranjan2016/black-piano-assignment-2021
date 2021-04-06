import "./App.css";
import Layout from "../src/hoc/Layout/Layout";
import { Route, Switch } from "react-router";
import SearchContainer from "./Containers/SearchContainer/SearchContainer";
import MovieList from "./Containers/MovieList/MovieList";

require("dotenv").config();

function App() { 
  return (
    <Layout>
      <Switch>
        <Route path="/search" exact component={SearchContainer} />
        <Route path="/" exact component={MovieList} />
      </Switch>
    </Layout>
  );
}

export default App;
