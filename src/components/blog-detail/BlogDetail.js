import { useParams } from "react-router-dom";

const BlogDetail = () => {

	const { id } = useParams();

	return ( 
		<div>
			<h2>Blog detail works! - { id }</h2>
		</div>
	 );
}
 
export default BlogDetail;