import "./App.css";
import Layout from "../src/hoc/Layout/Layout";
import { Route, Switch } from "react-router";
import Home from "../src/Containers/Home/Home";

require("dotenv").config();

function App() {
  const env_type = process.env.REACT_APP_HOST_ENV;
  const api_key = process.env.REACT_APP_SECRET_CODE;
  console.log(env_type, api_key);
  return (
    <Layout>
      <Switch>
        <Route path="/search" exact component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
