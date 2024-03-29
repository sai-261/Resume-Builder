import React from "react";
import template1img from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
import Defaultlayout from './../components/Defaultlayout';
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume for your new carrer",
      image: template1img,
    },
    {
      title: "Traditional A straightforward format that gives equal importance to all resume sections",
      image: template2img,
    },
  ];
  return (
    <Defaultlayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Defaultlayout>
  );
}

export default Home;
