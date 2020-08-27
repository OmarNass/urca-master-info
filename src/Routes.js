import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Landing from "./components/layout/Landing";
import Page from "./components/Page";
import Projects from "./components/Projects";

const Routes = ({ navigation }) => {
  const [pageSlugs, setPageSlugs] = useState([]);
  const [postSlugs, setPostSlugs] = useState([]);

  useEffect(() => {
    getSlugs("pages");
    getSlugs("posts");
  }, []);

  async function getSlugs(type) {
    try {
      const res = await axios.get(
        "/api/v3/content/" +
          type +
          "/?key=9c5ea65e652af6ad698e4fbf3e&fields=slug"
      );
      if (type === "pages") setPageSlugs(res.data.pages);
      else setPostSlugs(res.data.posts);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/projets" component={Projects} />
      {pageSlugs.map((slug) => (
        <Route
          key={slug.slug}
          exact
          path={"/" + slug.slug}
          render={(props) => (
            <Page {...props} type="pages" navigation={navigation} />
          )}
        />
      ))}
      {postSlugs.map((slug) => (
        <Route
          key={slug.slug}
          exact
          path={"/" + slug.slug}
          render={(props) => <Page {...props} type="posts" />}
        />
      ))}
    </Switch>
  );
};

export default Routes;
