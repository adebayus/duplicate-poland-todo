import React, { useState } from 'react';
import {
	FlatList,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Layout from '../Layouts/Layout';
import Box from '../utils/Box';
import { useTheme } from '../../themes/ThemeProvider';
import SearchComponent from '../utils/SearchComponent';
import Tags from '../tags/Tags';
import RoundButton from '../utils/RoundButton';
import TodoContainer from '../todo/TodoContainer';
import { useSelector } from 'react-redux';

const Home = (props) => {
	// console.log('Home.js');
	const { isDark, scheme } = useTheme();
	const state = useSelector((state) => state);
	const dupliState = state;
	const [search, setSearch] = useState('');

	var datas = dupliState.data
		.sort((a, b) => a.id - b.id)
		.sort((a, b) => a.isDone - b.isDone)
		.filter((el) => (search === null ? el : el.title.includes(search)));

	const onSearchHandler = (text) => {
		console.log(text.length, 'ini Text');
		setSearch(text);
	};

	if (dupliState.showTag !== 0) {
		datas = datas
			.filter((todo) => todo.tags === dupliState.showTag)
			.filter((el) => (search === null ? el : el.title.includes(search)));
	}

	return (
		<Layout>
			<SearchComponent
				onSearchHandler={onSearchHandler}
				search={search}
			/>
			<Tags datas={datas} />
			<TodoContainer {...props} datas={datas} />
			<RoundButton add {...props} />
		</Layout>
	);
};

export default Home;

const styles = StyleSheet.create({});
