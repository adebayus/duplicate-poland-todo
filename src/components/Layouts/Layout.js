import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';

const Layout = (props) => {
	const { isDark, scheme } = useTheme();
	return (
		<View
			style={[
				{
					// paddingVertical: scheme.spacings.s,
					flex: 1,
					backgroundColor: isDark
						? scheme.colors.darkGray
						: scheme.colors.background,
				},
			]}
		>
			<StatusBar
				animated={true}
				showHideTransition='none'
				backgroundColor='transparent'
				translucent={true}
				barStyle={isDark ? 'light-content' : 'dark-content'}
			/>
			{props.children}
		</View>
	);
};

export default Layout;

const styles = StyleSheet.create({});
