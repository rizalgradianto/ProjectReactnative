import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Footer extends Component {
	render(){
		return(
			<View style={forstyle.footer}>
			<Text style={{color:'rgba(91, 201, 157,1.0)', fontSize:15}}>
			Do not have an account ?
			</Text>
			<TouchableOpacity>
			<Text style={{color:'rgba(32, 138, 96,1.0}}', fontSize:15, fontWeight: 'bold'}}> Sign Up Now </Text>
			</TouchableOpacity>
			</View>
			)
	}
}

const forstyle = {
	footer: {
		marginTop: 50,
		flexDirection:'row'
	}
}

export default Footer;