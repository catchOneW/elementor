import Utils from 'elementor-app/utils/utils.js';

import './box.scss';

export default function Box( props ) {
	const baseClassName = 'eps-box',
		classes = [ baseClassName, props.className ];

	let style;

	if ( props.padding ) {
		style = {
			'--eps-box-padding': Utils.stringToRemValues( props.padding ),
		};

		classes.push( baseClassName + '--padding' );
	}

	return (
		<div style={ style } className={ Utils.arrayToClassName( classes ) }>
			{ props.children }
		</div>
	);
}

Box.propTypes = {
	className: PropTypes.string,
	padding: PropTypes.string,
	children: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.object,
		PropTypes.arrayOf( PropTypes.object ),
	] ).isRequired,
};

Box.defaultProps = {
	className: '',
};
