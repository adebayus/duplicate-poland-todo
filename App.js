import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/themes/ThemeProvider';
import Main from './Main';

import stores from './src/redux/store';
import { Provider } from 'react-redux';

const store = stores();
// console.log(store.getState(), 'main.app');
export default function App() {
	// const [isLoading, setIsLoading] = useState(false);
	const [loaded] = Font.useFonts({
		LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
		LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
	});

	if (!loaded) {
		return null;
	}
	return (
		<Provider store={store}>
			<AppearanceProvider>
				<ThemeProvider>
					<Main />
				</ThemeProvider>
			</AppearanceProvider>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'LatoBold',
	},
});
