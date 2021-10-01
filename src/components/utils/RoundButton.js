import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '../../themes/ThemeProvider';
import { updatedTodo } from '../../redux/action/todoAction';
import { Alert } from 'react-native';

const RoundButton = ({
	add,
	addData,
	navigation,
	updatedData,
	goBack,
	...props
}) => {
	const { scheme, isDark } = useTheme();
	const styleIcon = {
		size: 40,
		color: isDark ? 'white' : scheme.colors.dark,
	};

	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	console.log(state);
	const onPressAddHandler = () => {
		navigation.navigate('Add Todo', { add: add });
	};

	const onPressDoneHandler = () => {
		if (addData) {
			console.log('add');
			dispatch(updatedTodo({ updatedData, data: state.data }));
		} else {
			console.log('else');
			dispatch(updatedTodo({ updatedData, data: state.data }));
		}
		// console.log(
		// 	dispatch(updatedTodo({ updatedData, data: state.data })),
		// 	'handlerdone'
		// );
		goBack.goBack();
	};

	var iconComponent = <MaterialIcons name='done' {...styleIcon} />;
	if (add) {
		iconComponent = <AntDesign name='plus' {...styleIcon} />;
	}

	return (
		<TouchableOpacity
			onPress={add ? onPressAddHandler : onPressDoneHandler}
			activeOpacity={0.8}
			style={{
				backgroundColor: isDark ? scheme.colors.darkBlack : 'white',
				width: 70,
				height: 70,
				position: 'absolute',
				borderRadius: 50,
				elevation: 15,
				shadowOffset: {
					width: 0,
					height: 15,
				},
				bottom: 15,
				// left: '50%',
				alignSelf: 'center',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{iconComponent}
		</TouchableOpacity>
	);
};

export default RoundButton;
