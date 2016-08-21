var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

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
