import React from 'react';
import { View, Text as RnText } from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';

const Text = ({ variants, style, children }) => {
	const { scheme } = useTheme();
	const themeStyle = {
		color: scheme.colors.text,
	};

	return (
		<RnText style={[scheme.textVariants[variants], themeStyle, style]}>
			{children}
		</RnText>
	);
};

export default Text;
