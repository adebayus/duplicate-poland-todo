import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/dashboard/Home';
import { useTheme } from './src/themes/ThemeProvider';
import OuterHeader from './src/components/headers/OuterHeader';
import TodoDetail from './src/components/todo/TodoDetail';

const Navigation = createStackNavigator();

const Main = () => {
	const { isDark, scheme } = useTheme();

	const { Navigator, Screen } = Navigation;
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='HomeStack'
				screenOptions={{
					headerStyle: {
						backgroundColor: isDark
							? scheme.colors.background
							: 'white',
					},
					headerTintColor: scheme.colors.text,
					headerTitleStyle: scheme.textVariants.header,
				}}
			>
				<Screen
					name='Task List'
					component={Home}
					options={(props) => ({
						headerTitle: () => (
							<OuterHeader {...props} title='Task List' />
						),
						headerTitleContainerStyle: {
							width: '100%',
						},
					})}
				/>
				<Screen name='Add Todo' component={TodoDetail} />
				<Screen name='Todo Detail' component={TodoDetail} />
			</Navigator>
		</NavigationContainer>
	);
};

export default Main;
