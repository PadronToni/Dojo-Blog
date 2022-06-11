import { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import BlogList from "../blog-list/BlogList";
import Loader from "../loader/Loader";
import './home.css';

const Home = () => {

	const [blogs, setBlogs] = useState([]);
	const [name, setName] = useState('mario');
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState();

	const handleDelete = (id) => {
		setBlogs(blogs.filter(blog => blog.id !== id));
	}

	const handleAddBlog = () => {
		const newBlog = { title: 'stocazzo', body: 'Giovanna', author: 'Zimone', id: blogs.length + 1 };
		const newList = [...blogs];
		newList.push(newBlog);
		setBlogs(newList);
	}


	useEffect(() => {
		setTimeout(() => {

			fetch('http://localhost:8000/blogss')
				.then((res) => {
					if (!res.ok) {
						throw Error('Errore durante la richiesta al server');
					}
					return res.json();
				})
				.then((data) => {
					setBlogs(data);
					setIsLoading(false);
					setErr(null);
				})
				.catch((err) => {
					setErr(err.message);
					setIsLoading(false);
				})

		}, 2000);
	}, [])


	return (
		<div className="stack">

			{err &&
				<Banner message={err} type="error"></Banner>
			}

			<button onClick={() => handleAddBlog()} data-color="accent">Add a blog post</button>

			{isLoading && <Loader></Loader>}

			{blogs &&
				<BlogList
					blogs={blogs}
					title="All recent blogs"
					handleDelete={handleDelete}>
				</BlogList>
			}

			{blogs &&
				<BlogList
					blogs={blogs.filter(blog => blog.title !== "sos")}
					title="Only for you"
					handleDelete={handleDelete}>
				</BlogList>
			}

			<button onClick={() => setName('luigi')}>Update name</button>
			<span style={{ marginLeft: "1rem" }}><strong>Name: </strong> {name}</span>

		</div>
	);
}

export default Home;