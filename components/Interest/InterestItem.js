import React from 'react'
import PropTypes from 'prop-types'

const InterestItem = ({ interest, ...props }) => (

  <dl>
    <dt>_id</dt><dd>{interest._id}</dd>
    <dt>Person</dt><dd>{interest.person}</dd>
    <dt>Opportunity</dt><dd>{interest.opportunity}</dd>
    <dt>Comment</dt><dd>{interest.comment}</dd>
    <dt>Status</dt><dd>{interest.status}</dd>
  </dl>

)

InterestItem.propTypes = {
  interest: PropTypes.shape({
    person: PropTypes.string.isRequired,
    opportunity: PropTypes.string.isRequired,
    comment: PropTypes.string,
    status: PropTypes.string
  }).isRequired
}

export default InterestItem
