import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class Login extends Component {
	render(){
		return(
			<View>
			<TextInput
			style={forstyle.input}
			underlineColorAndroid="rgba(0,0,0,0)"
			placeholder="Username or Email"
			placeholderTextColor="#a8a8a8"
			/>
			<TextInput
			style={forstyle.input}
			underlineColorAndroid="rgba(0,0,0,0)"
			placeholder="Password"
			placeholderTextColor="#a8a8a8"
			/>
			<TouchableOpacity style={forstyle.tombol}>
				<Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
				Login
				</Text>
			</TouchableOpacity>
			</View>
			)
	}
}

const forstyle = {
	tombol: {
		backgroundColor: 'rgba(91, 201, 157,1.0)',
		borderRadius: 25,
		paddingHorizontal: 16,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	input: {
		backgroundColor: 'rgba(242, 249, 255,1.0)',
		marginBottom: 10,
		width: 310,
		borderRadius: 25,
		paddingHorizontal: 16,
		color: '#FF5757'
	}
}

export default Login;