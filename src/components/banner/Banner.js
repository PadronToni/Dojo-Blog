import './banner.css';

const Banner = ({	message, type, duration = 3000 }) => {

	// const [ messageValue, setMessage ] = message;

	// setTimeout(() => {
	// 	setMessage(undefined);
	// }, duration);

	return (
		<div
			className="banner"
			data-type={type}>
			<span>{message}</span>
		</div>
	);
}

export default Banner;