import { useState, useEffect } from 'react'

const useFetch = (url) => {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState();


	useEffect(() => {

		const abortCont = new AbortController();

		setTimeout(() => {

			fetch(url, { signal: abortCont.signal })
				.then((res) => {
					if (!res.ok) {
						throw Error('Error during request');
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsLoading(false);
					setErr(null);
				})
				.catch((err) => {
					if (err.name === 'AbortError') {
						console.log('fetch aborted');
					} else {
						setErr(err.message);
						setIsLoading(false);
					}
				})

		}, 500);

		return () => abortCont.abort();

	}, [url])

	return { data: [data, setData], isLoading, err }
}

export default useFetch;
