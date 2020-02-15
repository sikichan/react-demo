import React from 'react'
import './index.css'
class XButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    const {handleClick} = this.props
    if (handleClick) {
      handleClick(e)
    }
  }

  render() {
    const {style, children} = this.props
    return (
      <button className="Button" style={style} onClick={this.handleClick}>{children}</button>
    )
  }
}

export default XButton