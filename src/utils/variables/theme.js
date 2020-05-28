import { createMuiTheme } from '@material-ui/core/styles';

export const LIGHT = createMuiTheme({
	palette: {
		type: 'light',
		color: '#3D3B69',
		textColor: '#3D3B69',
		backgroundColor: '#ecf1fa',
		paper: '#ffffff',
		font: '"Open Sans", sans-serif',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1980,
		},
	},
});

export const DARK = createMuiTheme({
	palette: {
		type: 'dark',
		backgroundColor: '#424242',
		textColor: '#c9ced9',
		color: '#26a69a',
		bgLogo: '#22c1c3',
		paper: '#192c55',
		font: '"Open Sans", sans-serif',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1980,
		},
	},
});
