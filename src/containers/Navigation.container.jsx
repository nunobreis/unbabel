import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Navigation from '../components/molecules/Navigation/Navigation'

import * as transcriptionsActions from '../redux/transcriptions/transcriptions.actions'

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleFetchData = this.handleFetchData.bind(this)
  }

  handleFetchData() {
    const { actions } = this.props
    actions.loadTranscriptions()
  }

  render() {
    return (
      <Navigation
        fetchData={this.handleFetchData}
      />
    )
  }
}

NavigationContainer.propTypes = {
  transcriptions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  actions: PropTypes.object.isRequired
}

const mapStateToProps = ({ transcriptions }) => ({
  transcriptions
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(transcriptionsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)
