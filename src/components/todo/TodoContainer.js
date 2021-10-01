import React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { View, Text, ScrollView, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { changeDone } from '../../redux/action/todoAction';
import { useTheme } from '../../themes/ThemeProvider';
import Box from '../utils/Box';
import SwipeItem from '../utils/SwipeItem';
import TodoTest from './TodoTest';

const TodoContainer = ({ datas, ...props }) => {
	const { data, showTag } = props.state;
	const { isDark, scheme } = useTheme();
	// console.log('TodoConataine.js');

	const changeDoneHandler = (value) => {
		console.log(value, 'handler');
		props.dispatchFunction.isDoneChangeHandler({
			idTodo: value,
			data: data,
		});
	};

	const onPressHandler = (value) => {
		const dupliState = [...data];
		const findIndex = dupliState.findIndex((el) => el.id === value);

		const currentItem = dupliState[findIndex];
		props.navigation.navigate('Todo Detail', currentItem);
	};

	return (
		<Box mVertical='s' mHorizontal='s' style={{ flex: 1 }}>
			<FlatList
				data={datas}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<SwipeItem />
					// <TodoTest
					// 	changeDoneHandler={changeDoneHandler}
					// 	isDone={item.isDone}
					// 	id={item.id}
					// 	title={item.title}
					// 	isDark={isDark}
					// 	scheme={scheme}
					// 	onPressHandler={onPressHandler}
					// 	// title={data.title}
					// />
				)}
			/>
			{/* <ScrollView showsVerticalScrollIndicator={false}> */}
			{/* {datas.map((data, index) => (
				<TodoTest
					// changeDoneHandler={changeDoneHandler}
					isDone={data.isDone}
					id={data.id}
					isDark={isDark}
					scheme={scheme}
					key={index}
					// title={data.title}
				/>
			))} */}
			{/* </ScrollView> */}
		</Box>
	);
};
const mapStateToProps = (state) => {
	return { state: state };
};
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchFunction: {
			isDoneChangeHandler: (value) => {
				dispatch(changeDone(value));
			},
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
