import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';

const Box = ({
	mHorizontal,
	mVertical,
	mLeft,
	mTop,
	mRight,
	mBott,
	style,
	children,
}) => {
	const { scheme } = useTheme();
	const styles = [
		{ marginHorizontal: scheme.spacings[mHorizontal] },
		{ marginVertical: scheme.spacings[mVertical] },
		{ marginLeft: scheme.spacings[mLeft] },
		{ marginTop: scheme.spacings[mTop] },
		{ marginRight: scheme.spacings[mRight] },
		{ marginBottom: scheme.spacings[mBott] },
	];

	return <View style={[...styles, { ...style }]}>{children}</View>;
};

export default Box;
