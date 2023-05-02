import './index.css'

const UserInfo = () => {
  const imgUrl = 'https://assets.ccbp.in/frontend/react-js/profile-img.png'

  return (
    <div className="userinfo-container">
      <img src={imgUrl} alt="profile" className="user-img" />
      <h1 className="user-name"> Wade Warren </h1>
      <p className="user-role"> Software developer at UK </p>
    </div>
  )
}

export default UserInfo
