import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Box from '../utils/Box';
import RoundButton from '../utils/RoundButton';
import DropDownPicker from 'react-native-dropdown-picker';
import Layout from '../Layouts/Layout';
import { useTheme } from '../../themes/ThemeProvider';
import { useSelector } from 'react-redux';

const TodoDetail = (props) => {
	const { scheme, isDark } = useTheme();

	// if (add) {
	const { params } = props.route;
	const state = useSelector((state) => state.data);
	const randomId = Math.floor(Math.random() * 9999);
	console.log(randomId, 'asdasd');
	const [isDone, setIsDone] = useState(params.add ? false : params.isDone);
	const [id, setId] = useState(params.add ? randomId : params.id);
	const [title, setTitle] = useState(params.add ? '' : params.title);
	const [detail, setDetail] = useState(params.add ? '' : params.detail);
	const [tags, setTags] = useState(params.add ? '' : params.tags);
	const [open, setOpen] = useState(false);
	const [items, setItems] = useState([
		{ label: 'Studying', value: 1 },
		{ label: 'Working', value: 2 },
		{ label: 'Personal', value: 3 },
		{ label: 'Training', value: 4 },
	]);

	const currentData = { id, title, detail, tags, isDone };
	console.log(currentData, 'todoDetail');

	console.log(currentData, 'TodoDetail.js');

	return (
		<Layout>
			<View style={{ flex: 1 }}>
				<Box mHorizontal='s' mVertical='s'>
					<View
						style={{
							padding: 8,
							backgroundColor: isDark
								? scheme.colors.background
								: 'white',
							height: 45,
							borderRadius: 7,
							shadowOffset: {
								width: 0,
								height: 12,
							},
							elevation: 8,
							borderColor: 'white',
							borderWidth: 1,
						}}
					>
						<TextInput
							placeholder='*Write a title'
							placeholderTextColor='#949494'
							style={[
								{
									// backgroundColor: 'red',
									flex: 1,
									color: scheme.colors.text,
								},
								scheme.textVariants.body,
							]}
							value={title}
							onChangeText={setTitle}
						/>
					</View>
				</Box>
				<Box mHorizontal='s' mBott='s'>
					<DropDownPicker
						defaultNull
						placeholderStyle={{
							color: '#949494',
						}}
						// placeholder='*Select a tag'
						// arrowIconContainerStyle={{ backgroundColor: 'pink' }}

						open={open}
						value={tags}
						items={items}
						setOpen={setOpen}
						setValue={setTags}
						setItems={setItems}
						style={{
							height: 45,
							borderWidth: 0,
							shadowOffset: {
								width: 0,
								height: 12,
							},
							elevation: 8,
							backgroundColor: isDark
								? scheme.colors.background
								: 'white',
							borderColor: 'white',
							borderWidth: 1,
						}}
						dropDownContainerStyle={{
							borderWidth: 0,
							shadowOffset: {
								width: 0,
								height: 12,
							},
							elevation: 8,
							backgroundColor: isDark
								? scheme.colors.background
								: 'white',
							borderWidth: 1,
							borderColor: 'white',
						}}
						textStyle={[
							{ ...scheme.textVariants.body },
							{ color: scheme.colors.text },
						]}
					/>
				</Box>
				<Box mHorizontal='s' mBott='s'>
					<View
						style={{
							padding: 8,
							backgroundColor: isDark
								? scheme.colors.background
								: 'white',
							height: 120,
							borderRadius: 10,
							shadowOffset: {
								width: 0,
								height: 12,
							},
							elevation: 8,
							borderColor: 'white',
							borderWidth: 1,
						}}
					>
						<TextInput
							placeholder='*Write a detail'
							placeholderTextColor='#a9a9a9'
							style={[
								{ ...scheme.textVariants.body },
								{
									color: scheme.colors.text,
									flex: 1,
									textAlignVertical: 'top',
								},
							]}
							value={detail}
							onChangeText={setDetail}
							multiline={true}
							numberOfLines={5}
						/>
					</View>
				</Box>

				<RoundButton
					done
					addData={params.add ? true : false}
					updatedData={currentData}
					goBack={props.navigation}
				/>
			</View>
		</Layout>
	);
};

export default TodoDetail;
