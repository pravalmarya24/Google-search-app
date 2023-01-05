// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSuggestionInInputEle = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchInputFiltered = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-suggestion-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img-size"
        />
        <div className="unordered-list-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon-size"
            />
            <input
              type="search"
              className="search-input-size"
              placeholder="Search google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul>
            {searchInputFiltered.map(eachListItems => (
              <SuggestionItem
                eachItems={eachListItems}
                key={eachListItems.id}
                updateSuggestionInInputEle={this.updateSuggestionInInputEle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
