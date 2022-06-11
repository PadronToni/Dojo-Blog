import './banner.css';

const Banner = ({ message, type }) => {

	return (
		<div
			className="banner"
			data-type={type}>
			<span>{message}</span>
		</div>
	);
}

export default Banner;