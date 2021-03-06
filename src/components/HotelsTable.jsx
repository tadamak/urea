import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import HotelRow from './HotelRow'
import HotelsClickableTh from './HotelsClickableTh'

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th />
        <th>ホテル名</th>
        <HotelsClickableTh label="料金" sortKey="price" />
        <HotelsClickableTh label="レビュー" sortKey="reviewAverage" />
        <th className="hotel-review-count-column">レビュー件数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => <HotelRow key={hotel.id} hotel={hotel} />)}
    </tbody>
  </table>
)

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any)
}

HotelsTable.defaultProps = {
  hotels: []
}

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey])

const ConnectedHotelsTable = connect(state => ({
  hotels: sortedHotels(state.hotels, state.sortKey)
}))(HotelsTable)

export default ConnectedHotelsTable
