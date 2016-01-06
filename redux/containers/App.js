import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'




class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div>
      <h2> hi, im from app.js </h2>	
       
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}



export default connect(
  mapStateToProps
)(App)
