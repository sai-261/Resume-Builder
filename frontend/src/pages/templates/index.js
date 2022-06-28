import React from 'react'
import Defaultlayout from '../../components/Defaultlayout';
import { useNavigate, useParams } from "react-router-dom";
import Template1 from './Template1';
import Template2 from './Template2';
function Templates() {
    const route = useParams();
    const navigate = useNavigate()
    const gettemplate = () => {
      switch (route.id) {
        case "1": {
          return <Template1 />;
        }
        case "2": {
          return <Template2 />;
        }
      }
    };
    return (
      <Defaultlayout>
      {gettemplate()}
      </Defaultlayout>
    );
  }
  
  export default Templates;