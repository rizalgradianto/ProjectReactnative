import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Judul extends Component{
	 render() {
    return (
    	<Image style={styles.logo}source = {require('../halal.png')}/>
    	)
  }
}

const styles={
	logo:{
		width : 80,
		height :80,
	}
}
export default Judul;