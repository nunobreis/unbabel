import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Navigation from '../components/molecules/Navigation/Navigation'

const NavigationContainer = ({ transcriptions }) => {
  console.log('transcriptions state ===> ', transcriptions)
  return <Navigation />
}

NavigationContainer.propTypes = {
  transcriptions: PropTypes.array.isRequired
}

const mapStateToProps = ({ transcriptions }) => ({
  transcriptions
})

export default connect(mapStateToProps)(NavigationContainer)
