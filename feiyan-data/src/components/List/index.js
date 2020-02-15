import React from 'react'
import './index.css'
class List extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      data: {
        name: '中国',
        today: {
          confirm: 9
        },
        total: {
          confirm: 9,
          dead: 0,
          heal: 1
        },
        children: []
      }
    }
    
  }
  render() {
    // const {area, todayConfirm, confirm, dead, heal} = this.props.data
    const {name, today, total} = this.state.data
    
    return (
      <React.Fragment>
        <li>{name}</li>
        <li>{today.confirm}</li>
        <li>{total.confirm}</li>
        <li>{total.dead}</li>
        <li>{total.heal}</li>
        <li><i className="iconfont">&#xe6be;</i></li>
      </React.Fragment>
    )
  }
}

export default List