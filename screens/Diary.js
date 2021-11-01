import React from 'react';
import { View,Text, StyleSheet} from 'react-native';

export const Diary = ({route})=>(
	<View style={styles.titleContainer}>
		
		<Text style={{ fontSize:40 }}>{route.params.diary.title}</Text>
		<Text style={{ fontSize:20 }}>{route.params.diary.body}</Text>
		<Text style={{ color:'grey',margin:20 }}>{new Date(route.params.diary.created).toDateString()}</Text>
	</View>
)

const styles = StyleSheet.create({
	titleContainer: {
		flex: 1,
		justifyContent:'center',
		alignItems: 'center',
	}
});
