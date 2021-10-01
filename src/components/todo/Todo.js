import React, { useState } from 'react';
import { View, CheckBox, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from '../../themes/ThemeProvider';
import Text from '../utils/Text';
import { changeDone } from '../../redux/action/todoAction';
import { CheckBox as CheckElement } from 'react-native-elements';

function Todo(props) {
	// const [isSelected, setIsSelected] = useState(props.isDone);

	const { title, tags, isDone, idTodo, changeDoneHandler, isDark, scheme } =
		props;
	const item = {
		idTodo,
		title,
		tags,
		isDone,
	};
	console.log(idTodo, 'id Todo.js');

	// const { scheme, isDark } = useTheme();
	// console.log({ props, item }, 'Todo.js');

	// const onPressHandler = () => {
	// 	props.navigation.navigate('Todo Detail', item);
	// };

	return (
		<TouchableOpacity
			onPress={onPressHandler}
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
			}}
		>
			<CheckBox
				value={isDone}
				onValueChange={() => changeDoneHandler(idTodo)}
				tintColors={{ true: scheme.colors.text }}
			/>

			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text
					variants='body'
					style={isDone ? { textDecorationLine: 'line-through' } : {}}
				>
					{props.title}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
export default Todo;
