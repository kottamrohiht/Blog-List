import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item

  return (
    <li className="list-item">
      <div className="title-date-container">
        <h1 className="title"> {title} </h1>
        <p className="date"> {publishedDate} </p>
      </div>
      <p className="date"> {description} </p>
    </li>
  )
}

export default BlogItem
