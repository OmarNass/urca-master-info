import React, { useEffect, useState } from "react";
import axios from "axios";

import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getPosts("project");
  }, []);

  async function getPosts(type) {
    try {
      const res = await axios.get(
        "/api/v3/content/posts/?key=9c5ea65e652af6ad698e4fbf3e&filter=tag:" +
          type
      );
      setProjects(res.data.posts);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-4 mb-5">
              <Project
                thumbnail={project.feature_image}
                projectData={project}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
