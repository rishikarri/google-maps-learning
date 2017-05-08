import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import EditorMap from './components/EditorMap';




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
