import React, { useState } from 'react';
import {
	Animated,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';

const CustomSwitch = () => {
	const { isDark, setScheme, scheme } = useTheme();

	const styles = customStyles(isDark, scheme);

	const [switchTransform, setSwitchTransform] = useState(
		new Animated.Value(isDark ? 40 : 0)
	);

	const changeSwitchHandler = () => {
		isDark ? setScheme('light') : setScheme('dark');

		Animated.timing(switchTransform, {
			toValue: isDark ? 0 : 40,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const animatedStyle = {
		switch: {
			transform: [
				{
					translateX: switchTransform,
				},
			],
		},
	};
	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={changeSwitchHandler}
			style={[styles.track]}
		>
			<Animated.View style={[styles.thumb, animatedStyle.switch]}>
				<Image
					style={styles.image}
					source={
						isDark
							? require('../../../assets/half-moon.png')
							: require('../../../assets/sunny.png')
					}
				/>
			</Animated.View>
			<Text style={[styles.text]}>{isDark ? 'NIGHT' : 'DAY'}</Text>
		</TouchableOpacity>
	);
};

export default CustomSwitch;

const customStyles = (isDark, scheme) =>
	StyleSheet.create({
		track: {
			width: 80,
			height: 40,
			backgroundColor: isDark
				? scheme.colors.darkGray
				: scheme.colors.background,
			// borderWidth: 1,
			borderRadius: 20,
			flexDirection: 'row',
			alignItems: 'center',
			marginVertical: 5,
		},
		text: {
			position: 'absolute',
			fontSize: 12,
			fontWeight: 'bold',
			color: scheme.colors.text,
			left: isDark ? 7 : null,
			right: isDark ? null : 15,
		},
		thumb: {
			position: 'absolute',
			width: 40,
			height: 40,
			borderRadius: 50,
			// backgroundColor: 'yellow',
			justifyContent: 'center',
			alignItems: 'center',
			// elevation: 1,
			zIndex: 1,
		},
		image: {
			width: 35,
			height: 35,
		},
	});
