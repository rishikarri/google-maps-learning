import React, { Component } from 'react';
import EditorMap from './components/EditorMap/'
// import CircularProgress from 'material-ui/CircularProgress';


class App extends Component {
  render() {
    return (
      <EditorMap 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAB0U8xPe2boLDrlV8II8z0IH0bKYcer4A"
        loadingElement={
            <div>
                Hello
            </div>
        }
        containerElement={
          <div style={{ height: `700px`}} />
        }
        mapElement={
          <div style={{ height: `700px`}} />
        }    
      />
    );
  }
}

export default App;


// <div style={{ height: '100%' }}>
//     <CircularProgress size={60} thickness={7}/>
// </div>