import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import EditorMap from './components/EditorMap';


// styles to be used later by the map 
const styles = {
  dialogContainer: {
    height: '500px',
    marginBottom: '10px',
  },
  dialogMap: {
    height: '100%',
  },
  buttons: {
    textAlign: 'right',
  },
};


ReactDOM.render(

  <EditorMap 
  	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAB0U8xPe2boLDrlV8II8z0IH0bKYcer4A"
  	loadingElement={
      <div style={{ height: `100%` }}>
        Hello
      </div>

  	}
  	containerElement={
      <div style={{ height: `700px`}} />
    }
    mapElement={
      <div style={{ height: `700px`}} />
    }    
  />,
  document.getElementById('root')
);
