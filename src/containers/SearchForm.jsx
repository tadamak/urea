import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setPlace, startSearch } from '../actions/'

const SearchForm = props => (
  <form
    className="search-form"
    onSubmit={e => {
      e.preventDefault()
      props.history.push(`/?place=${props.place}`)
      props.startSearch()
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={e => {
        e.preventDefault()
        props.setPlace(e.target.value)
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
)

SearchForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  place: PropTypes.string.isRequired,
  startSearch: PropTypes.func.isRequired,
  setPlace: PropTypes.func.isRequired
}

const ConnectedSearchForm = connect(state => ({ place: state.place }), {
  setPlace,
  startSearch
})(SearchForm)

export default ConnectedSearchForm
