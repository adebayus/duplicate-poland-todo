const pallate = {
	darkBlack: '#2D4059',
	orange: '#F07B3F',
	purple: '#9D0191',
	yellow: '#FFD460',
	red: '#EA5455',
	dark: '#222831',
	lightGray: '#DDDDDD',
	darkGray: '#393E46',
};

export const themeLight = {
	colors: {
		background: pallate.lightGray,
		text: pallate.dark,
		...pallate,
	},
	spacings: {
		xs: 4,
		s: 10,
		m: 16,
		l: 32,
		xl: 64,
	},
	textVariants: {
		header: {
			fontFamily: 'LatoRegular',
			fontSize: 22,
			fontWeight: 'bold',
		},
		subHeader: {
			fontFamily: 'LatoRegular',
			fontSize: 20,
		},
		body: {
			fontFamily: 'LatoRegular',
			fontSize: 18,
		},
	},
};

export const darkTheme = {
	...themeLight,
	colors: {
		...themeLight.colors,
		background: pallate.dark,
		text: pallate.lightGray,
	},
};
