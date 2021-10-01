import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';
import CustomSwitch from '../utils/CustomSwitch';
import Text from '../utils/Text';

// const useThemes = useTheme();

export default function OuterHeader(props) {
	// console.log(props, 'OuterHeader.js');
	const { scheme } = useTheme();
	const styles = customStyles(scheme);

	// console.log(scheme, 'scheme');
	// console.log(styles(), 'outerHeader.js');
	return (
		<View style={[styles.container]}>
			<Text variants='header'>{props.title}</Text>
			<CustomSwitch />
		</View>
	);
}

const customStyles = (scheme) =>
	StyleSheet.create({
		container: {
			width: '100%',
			height: '100%',
			justifyContent: 'space-between',
			alignItems: 'center',
			flexDirection: 'row',
		},
		textStyle: {
			...scheme.textVariants.header,
			color: scheme.colors.text,
		},
	});
