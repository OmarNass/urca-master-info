import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Page = ({ match, type, navigation }) => {
  const [page, setPage] = useState({});

  useEffect(() => {
    getPage(match.path);
  }, []);

  async function getPage(path) {
    const slug = path.substring(1);
    try {
      const res = await axios.get(
        "/api/v3/content/" +
          type +
          "/slug/" +
          slug +
          "/?key=cac15f28976f6e0ff9542ef6a6"
      );
      if (type === "pages") setPage(res.data.pages[0]);
      else setPage(res.data.posts[0]);
    } catch (err) {
      console.log(err.message);
    }
  }

  const getDateFromString = (string) => {
    const date = new Date(string);
    return date.toLocaleString();
  };

  const sidenav =
    type === "pages" ? (
      navigation.map((link) => {
        if (link.url.includes("http")) {
          return (
            <li key={link.label}>
              <a href={link.url} target="_blank">
                {link.label}
              </a>
            </li>
          );
        }
        return (
          <li>
            <Link to={link.url}>{link.label}</Link>
          </li>
        );
      })
    ) : (
      <p>
        <strong>Publié le:</strong>
        <br />
        {getDateFromString(page.created_at)}
      </p>
    );

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-0">
            <div className="sidebar">
              <ul className="side-nav">{sidenav}</ul>
              <ul className="espace">
                <li>
                  <a href="#">
                    <img src={require("../img/bureau-virtuel.png")} alt="" />{" "}
                    Bureau virtuel
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../img/bureau-virtuel.png")} alt="" />{" "}
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 px-0">
            {/* <!-- BREADCRUMBS NAVIGATION --> */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
            <div className="page-content">
              <h1>{page.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: page.html }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
