const React = require('react')
const Upload = require('./Upload')

class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <Upload/>
      </div>
    );
  }
}

module.exports = Main
