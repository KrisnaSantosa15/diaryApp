import AsyncStorage from "@react-native-async-storage/async-storage";

const setItem = async (key,item) => {
	const res = JSON.stringify(item);
	await AsyncStorage.setItem(key,res)
	return res
}

const getItem = async (key)=>{
	const rowData = await AsyncStorage.getItem(key)
	const item = JSON.parse(rowData);
	return item;
}

export const Storage = {setItem,getItem} 