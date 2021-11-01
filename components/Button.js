import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { theme } from '../constant/theme';

export const Button = ({ title, style, onPress }) => {
	return (
		<TouchableOpacity style={[styles.button,style]} activeOpacity={0.7} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems:'center',
		justifyContent:'center',
		padding:10,
		borderWidth:1,
		borderColor: theme.primary_color_dark,
		backgroundColor: theme.primary_color
	},
	title: {
		fontSize:27,
		fontWeight:'bold'
	}
})