import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ButtonTag from './ButtonTag';
import { changeTagShow } from '../../redux/action/todoAction';
const Tags = () => {
	const dataTag = [
		{ id: 0, title: 'All', color: 'darkBlack' },
		{ id: 1, title: 'Studying', color: 'orange' },
		{ id: 2, title: 'Working', color: 'purple' },
		{ id: 3, title: 'Personal', color: 'yellow' },
		{ id: 4, title: 'Training', color: 'red' },
	];

	const changeActiveHandler = (value) => {
		dispatch(changeTagShow(value));
	};
	const state = useSelector((state) => state);
	// console.log(state.showTag, 'state');
	const dispatch = useDispatch();
	const dataLength = dataTag.length - 1;

	return (
		<ScrollView
			horizontal
			style={{ maxHeight: 30 }}
			showsHorizontalScrollIndicator={false}
		>
			{dataTag.map((data, index) => (
				<ButtonTag
					key={index}
					title={data.title}
					color={data.color}
					dataLength={dataLength}
					id={data.id}
					isActive={data.id === state.showTag ? true : false}
					changeActive={changeActiveHandler}
				/>
			))}
		</ScrollView>
	);
};

export default Tags;
