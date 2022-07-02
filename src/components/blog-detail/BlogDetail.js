import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Banner from "../banner/Banner";
import Loader from "../loader/Loader";

const BlogDetail = () => {

	const { id } = useParams();
	const { data: [blog, setBlog], err, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

	return (
		<div>

			{/* Loader */}
			{isLoading && <Loader></Loader>}
			{/* Error banner */}
			{err && <Banner type="error" message={err}></Banner>}

			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>{blog.body}</p>
				</article>
			)}
		</div>
	);
}

export default BlogDetail;