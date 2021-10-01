import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';
import Box from './Box';
import { FontAwesome } from '@expo/vector-icons';

const SearchComponent = (props) => {
	const { isDark, scheme } = useTheme();
	return (
		<Box mHorizontal='s' mVertical='s'>
			<View
				style={{
					backgroundColor: isDark
						? scheme.colors.background
						: 'white',
					height: 50,
					borderRadius: 10,
					width: '100%',
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 10,
					borderWidth: 1,
					borderColor: 'white',
				}}
			>
				<View>
					<FontAwesome
						name='search'
						size={24}
						color={scheme.colors.text}
						style={{ marginRight: 10, width: 30 }}
					/>
				</View>

				<TextInput
					value={props.search}
					onChangeText={props.onSearchHandler}
					style={[
						scheme.textVariants.body,
						{
							height: 40,
							flex: 1,
							color: scheme.colors.text,
							textDecorationLine: 'none',
						},
					]}
				/>
			</View>
		</Box>
	);
};

export default SearchComponent;
