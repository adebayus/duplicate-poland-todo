import React, { createContext, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { themeLight, darkTheme } from './theme';

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
	const colorScheme = useColorScheme();
	const [isDark, setIsDark] = useState(colorScheme === 'dark');
	const defaultTheme = {
		isDark: isDark,
		scheme: isDark ? darkTheme : themeLight,
		setScheme: (scheme) => setIsDark(scheme === 'dark'),
	};
	return (
		<ThemeContext.Provider value={defaultTheme}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
