import React, {useState} from 'react';
import { StyleSheet,  View, Text, TextInput} from 'react-native';
import { Button } from '../components/Button';
import { Storage } from '../utils/Storage'

export const AddDiary =  ({navigation}) => {
	const [title,setTitle] = useState()
	const [body,setBody] = useState()

	const submit = async ()=>{
		const created = new Date().getTime()
		const diary = { title, body, created };
		const AllItems = (await Storage.getItem('diaries')) || '[]';
		const updated_diaries = [...AllItems,diary]
		await Storage.setItem('diaries',updated_diaries)
		navigation.goBack()
	}
	return (
		<View style={styles.container}>
			<View style={styles.group}>
				<Text style={styles.label}> Title</Text>
				<TextInput placeholder="example" style={styles.title_input} onChangeText={setTitle} value={title} />
			</View>
			<View style={[styles.group,{flex:1}]}>
				<Text style={styles.label}> Body</Text>
				<TextInput placeholder="example" style={[styles.title_input,{height:300,textAlignVertical:'top'}]} multiline onChangeText={setBody} value={body} />
			</View>
			<Button title="Submit" onPress={submit} />
		</View>
	)
}

const styles = StyleSheet.create({	
	container: {
		flex:1,
		paddingTop:20
	},
	label: {
		fontSize:24,
		marginLeft:20,
		marginBottom:10
	},
	title_input: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		fontSize: 18,
		borderWidth:1,
		marginHorizontal:10,
		borderColor:'grey',
		
	},
	group: {

	}
});
