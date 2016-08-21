var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
    div({title: 'Props are great'},
      MyTitleFact({title: 'use them everywhere', color: 'rebeccapurple'}),
      React.createElement(MyTitle, {title: 'I Love props', color: 'papayawhip'}),
      ce(MyTitle, {title: 'Props', color: 'peru'})
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
