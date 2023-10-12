import './index.css'

const AppItem = props => {
  const {eachAppList} = props
  const {appName, imageUrl} = eachAppList

  return (
    <li className="list-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
