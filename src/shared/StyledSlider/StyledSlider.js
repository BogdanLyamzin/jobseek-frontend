import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const SliderStyles = withStyles({
	thumb: {
		height: 20,
		width: 20,
		backgroundColor: '#00F2C9',
		marginTop: -10,
		marginLeft: -10,
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
		color: '#6D64FF',
	},
	track: {
		backgroundColor: '#00F2C9',
		height: 2,
		borderRadius: 4,
	},
	rail: {
		backgroundColor: '#3D3B69',
		height: 2,
		borderRadius: 4,
	},
	mark: {
		width: 3,
		height: 3,
		borderRadius: 2,
		backgroundColor: '#ffffff',
	},
})(Slider);

export default SliderStyles;
