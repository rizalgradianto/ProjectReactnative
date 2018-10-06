import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

export default Biodata = (props) => (
	<View style ={forstyle.container}>
	<View style ={forstyle.background}>
	<View>
		<Image style={forstyle.photo} source={require('../man.png')}/>
	</View>
	<View style={forstyle.description}>
	<Text style={forstyle.name}>Rizal Gradianto</Text>
	<Text style={forstyle.subtitle}>32</Text>
	<Text style={forstyle.subtitle}>XI RPL 1</Text>
	</View>
	
	</View>
	<View style={forstyle.footer}>
	<Text style={forstyle.smk}>Rizal Gradianto</Text>
	<Text>32/XI RPL 1</Text>
	</View>

	</View>


	)
const forstyle={
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#f2f2f2'
	},
	background: {
		justifyContent: 'center',
		alignItems: 'center',
		background: '#5ead8d',
		witdh: 300,
		height: 300,
		padding: 0,
		borderRadius: 10,
		marginBottom:0
	},
	photo: {
		witdh: 10,
		marginTop: -20
	},
	description: {
		margin: 50,
		marginTop: 35,
		marginLeft: 5,
		marginRight: 5
	},
	name: {
		fontSize: 28,
		fontWeight: 'bold',
		alignSelf: 'center',
		color: '#f2f2f2'
	},
	subtitle: {
		color: '#f2f2f2',
		fontSize: 20,
	},
	footer: {
		marginTop: 80,
		alignItems: 'center'
	},
	smk: {
		fontSize: 20,
		fontWeight: 'bold',
	}
}