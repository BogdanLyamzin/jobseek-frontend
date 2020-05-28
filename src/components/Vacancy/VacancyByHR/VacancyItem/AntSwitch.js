import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const AntSwitch = withStyles(() => ({
	root: {
		width: 22,
		height: 12,
		padding: 0,
		display: 'flex',
		marginRight: 15,
	},
	switchBase: {
		padding: 2,
		'&$checked': {
			transform: 'translateX(10px)',
			color: '#FFFFFF',
			'& + $track': {
				opacity: 1,
				backgroundColor: '#00F2C9',
			},
		},
	},
	thumb: {
		width: 8,
		height: 8,
		boxShadow: 'none',
	},
	track: {
		opacity: 1,
		backgroundColor: 'rgb(253, 0, 0)',
	},
	checked: {},
}))(Switch);

export default AntSwitch;
