import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeItem = () => {
	return (
		<Swipeable
			renderLeftActions={LeftSwipeActions}
			renderRightActions={rightSwipeActions}
			onSwipeableRightOpen={swipeFromRightOpen}
			onSwipeableLeftOpen={swipeFromLeftOpen}
		>
			<View
				style={{
					paddingHorizontal: 30,
					paddingVertical: 20,
					backgroundColor: 'white',
				}}
			>
				<Text style={{ fontSize: 24 }} style={{ fontSize: 20 }}>
					aaa
				</Text>
			</View>
		</Swipeable>
	);
};
const LeftSwipeActions = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#ccffbd',
				justifyContent: 'center',
			}}
		>
			<Text
				style={{
					color: '#40394a',
					paddingHorizontal: 10,
					fontWeight: '600',
					paddingHorizontal: 30,
					paddingVertical: 20,
				}}
			>
				Bookmark
			</Text>
		</View>
	);
};
const rightSwipeActions = () => {
	return (
		<View
			style={{
				backgroundColor: '#ff8303',
				justifyContent: 'center',
				alignItems: 'flex-end',
			}}
		>
			<Text
				style={{
					color: '#1b1a17',
					paddingHorizontal: 10,
					fontWeight: '600',
					paddingHorizontal: 30,
					paddingVertical: 20,
				}}
			>
				Delete
			</Text>
		</View>
	);
};
const swipeFromLeftOpen = () => {
	alert('Swipe from left');
};
const swipeFromRightOpen = () => {
	alert('Swipe from right');
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemSeparator: {
		flex: 1,
		height: 1,
		backgroundColor: '#444',
	},
});
export default SwipeItem;
