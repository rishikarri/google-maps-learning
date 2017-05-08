import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

// Wrap all `react-google-maps` components with `withGoogleMap` HOC

// create a googlemap that takes in props and then goes ahead and creates a google map using these props

// create a default center
const ctr = { lat: 34, lng: -85 };

const EditorMap = withScriptjs(
	withGoogleMap(
		(props) =>
			<GoogleMap 				
				defaultCenter={ctr}
				defaultZoom={8}
			>	
			{/*now that the map is built, lets go ahead and add a marker */}
			<Marker 
				position={ctr}
			/>

			</GoogleMap>			
	)
)



export default EditorMap; 