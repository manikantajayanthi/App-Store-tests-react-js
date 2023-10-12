import './index.css'

const TabItem = props => {
  const {eachTabList, onClickChange, isActive} = props
  const {tabId, displayText} = eachTabList

  const changeCategory = () => {
    onClickChange(tabId)
  }

  const isActiveTab = isActive ? 'active-class' : ''
  const isActiveHorizontalLine = isActive ? 'horizontal-line' : ''

  return (
    <li className="list-tab-item">
      <button
        type="button"
        onClick={changeCategory}
        className={`app-type ${isActiveTab}`}
      >
        {displayText}
      </button>
      <hr className={isActiveHorizontalLine} />
    </li>
  )
}

export default TabItem
