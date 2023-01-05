// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItems, updateSuggestionInInputEle} = props
  const {suggestion} = eachItems

  const onClikingArrow = () => {
    updateSuggestionInInputEle(suggestion)
  }

  return (
    <li className="item-list">
      <div className="list-items-container">
        <p className="para">{suggestion}</p>
      </div>
      <button type="button" className="btn" onClick={onClikingArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-size"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
