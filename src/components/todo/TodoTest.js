import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../utils/Text';
import CheckBox from '@react-native-community/checkbox';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function TodoTest({
	id,
	isDone,
	changeDoneHandler,
	isDark,
	scheme,
	title,
	onPressHandler,
}) {
	return (
		<TouchableOpacity
			onPress={() => onPressHandler(id)}
			style={{
				height: 50,
				marginBottom: 10,
				flexDirection: 'row',
				backgroundColor: isDark ? scheme.colors.background : 'white',
				borderRadius: 5,
				shadowColor: 'white',
				shadowOffset: { height: 10, width: 0 },
				elevation: 4,
				shadowRadius: 10,
				borderWidth: 1,
				borderColor: 'white',
				alignItems: 'center',
			}}
		>
			<CheckBox
				disabled={false}
				value={isDone}
				onChange={() => changeDoneHandler(id)}
				tintColors={{ true: scheme.colors.text }}
			/>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text
					variants='body'
					style={isDone ? { textDecorationLine: 'line-through' } : {}}
				>
					{title}
				</Text>
			</View>

			{/* <CheckBox
		// 	// disabled={false}
		// 	value={isDone}
		// 	onChange={() => changeDoneHandler(id)}
		// /> */}
		</TouchableOpacity>
	);
}
