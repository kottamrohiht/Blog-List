import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="list-item-container">
      {blogsList.map(each => (
        <BlogItem item={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
