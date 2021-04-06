import "./App.css";
import Layout from "../src/hoc/Layout/Layout";
import { Route, Switch } from "react-router";
import SearchContainer from "./Containers/SearchContainer/SearchContainer";
import MovieList from "./Containers/MovieList/MovieList";

require("dotenv").config();

function App() {
  // const env_type = process.env.REACT_APP_HOST_ENV;
  // const api_key = process.env.REACT_APP_SECRET_CODE;
  // console.log(env_type, api_key);
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
