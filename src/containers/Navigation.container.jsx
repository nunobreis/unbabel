import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Navigation from '../components/molecules/Navigation/Navigation'

const NavigationContainer = () => <Navigation />

NavigationContainer.propTypes = {
  transcriptions: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

const mapStateToProps = ({ transcriptions }) => ({
  transcriptions
})

export default connect(mapStateToProps)(NavigationContainer)
