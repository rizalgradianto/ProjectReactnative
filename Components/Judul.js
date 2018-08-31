import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return(
			<Text style={salon.Judul}>BIODATA</Text>
			)
	}
}

const salon = {
	Judul: {
		color: '#3bb2b8',
		fontSize: 50,
		fontWeight:'bold',
		backgroundColor: '#fff'	
	}
}
export default Judul;
