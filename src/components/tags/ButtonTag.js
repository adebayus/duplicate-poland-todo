import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';
import Box from '../utils/Box';
import Text from '../utils/Text';

const ButtonTag = (props) => {
	const { isDark, scheme } = useTheme();

	var style = {
		container: {
			backgroundColor: isDark ? scheme.colors.background : 'white',
			borderColor: scheme.colors[props.color],
			borderWidth: 1,
		},
		text: {
			color: scheme.colors[props.color],
		},
	};

	var boxProps = {
		mLeft: 's',
	};
	if (props.dataLength === props.id) {
		boxProps = { mHorizontal: 's' };
	}
	return (
		<Box {...boxProps}>
			<TouchableOpacity
				onPress={() => props.changeActive(props.id)}
				activeOpacity={0.8}
				style={[
					{
						backgroundColor: scheme.colors[props.color],
						padding: 5,
						borderRadius: 10,
						color: 'white',
						height: '100%',
						width: 110,
						justifyContent: 'center',
						alignItems: 'center',
					},

					props.isActive ? {} : style.container,
				]}
			>
				<Text
					variants='body'
					style={[
						{
							color: 'white',
							fontWeight: 'bold',
							letterSpacing: 1,
						},
						props.isActive ? {} : style.text,
					]}
				>
					{props.title}
				</Text>
			</TouchableOpacity>
		</Box>
	);
};

export default ButtonTag;
