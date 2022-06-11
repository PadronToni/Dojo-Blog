import './blog-list.css'

const BlogList = ({ blogs, title, handleDelete }) => {


	return (
		<div className='stack'>

			<h2>{title}</h2>
			<div className="[ blog-list ] [ stack ]">

				{blogs.map((blog) => (
					<div className="blog-preview" key={blog.id}>
						<div>
							<h3>{blog.title}</h3>
							<p>{blog.body}</p>
						</div>
						<button onClick={() => handleDelete(blog.id)}>delete</button>
					</div>
				))}

			</div>
		</div>
	);

}


export default BlogList;