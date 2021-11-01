import React from 'react';
import { StyleSheet,  View, ScrollView, RefreshControl, Text} from 'react-native';
import { Button } from '../components/Button';
import  {ListItem}  from '../components/ListItem';
import { Storage } from '../utils/Storage';

export class Home extends React.Component{
	state = {
		refreshing: false,
		diaries: [],
	};

	onRefresh = async () => {
		this.setState({refreshing:true})
		const diaries = await Storage.getItem('diaries');
		this.setState({diaries})
		this.setState({refreshing:false})

	}

	itemPressHandler = (diary)=>{
		this.props.navigation.navigate('Diary',{
			diary
		})
	}

	render(){
		const {diaries} = this.state
		return (
			<View style={styles.home}>
				<ScrollView style={styles.body} refreshControl={
				<RefreshControl 
				refreshing={this.state.refreshing} 
				onRefresh={this.onRefresh} 
				/>}>
					{diaries.length ? (
						diaries.map((diary)=>{
							return (<ListItem title={diary.title} subtitle={new Date(diary.created).toDateString()} onPress={()=>this.itemPressHandler(diary)} />)
						})
						
					) : (<View style={styles.placeholderContent}>
						<Text style={styles.placeholder}>No Diaries Yet!</Text>
					</View>)}
					
				</ScrollView>
				<Button title="Add new day" onPress={() => {this.props.navigation.navigate('AddDiary')}} />
			</View>
		)
	}
}

const styles = StyleSheet.create({	
	home: {
		flex:1
	},
	content: {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	placeholder: {
		fontSize:24,
		color: 'lightgrey'
	},
	placeholderContent: {
		marginTop:20,
		justifyContent:'center',
		alignItems:'center'
	},
	body: {
		flex:1
	}
});
