var React = require('react')
var h1 = React.DOM.h1
var div = React.DOM.div

var MyTitle = React.createClass({
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
      )
  }
})

module.exports = MyTitle
