import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View} from 'react-native';
import { Home } from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {theme} from './constant/theme'
import { AddDiary } from './screens/AddDiary';
import { Diary } from './screens/Diary';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator mode='modal'>
					<Stack.Screen 
					name="Home" 
					component={Home} 
					options={{
						title: 'Diary',
						headerStyle: {
							backgroundColor: theme.primary_color,
						},
						headerTitleAlign:'center'
					}} />
					<Stack.Screen 
					name="AddDiary" 
					component={AddDiary} 
					options={{
						title: 'New Diary',
						headerStyle: {
							backgroundColor: theme.primary_color,
						},
						headerTitleAlign:'center'
					}} />
					<Stack.Screen 
					name="Diary" 
					component={Diary} 
					options={{
						title: 'Diary',
						headerStyle: {
							backgroundColor: theme.primary_color,
						},
						headerTitleAlign:'center'
					}} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		backgroundColor: theme.primary_color,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
});
