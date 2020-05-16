import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {getName , getDelete} from '../../action/biaodan'
import './styles.less'

export default @connect(state => {
  return {
    data:state.list.data
  }
},{
  getName,
  getDelete
})

class DataList extends Component {
  onClick = (item) => {
    this.props.getName(item)
  }
  onClickDele = (item) => {
    this.props.getDelete(item)
  }
  render() {
    const { data } = this.props
    return (
      <div className="list">
        <p style={{fontSize:'80px',color:'blue'}}><NavLink to="/">form</NavLink></p>
        {
          data.map((item,index) => {
            return <div key={item.id}>
                <ul>
                  <li>{item.username}</li>
                  <li>{item.age}</li>
                  <li>{item.sex}</li>
                  <li>{item.like}</li>
                </ul>
                <p onClick={() => this.onClick(item)}
                style={{color:"red",width:'40px',float:'left'}}>修改</p>
                <p  onClick={() => this.onClickDele(item)}
                style={{color:"blue",width:'40px',float:'left'}}>删除</p>
              </div>
          })
        }
      </div>
    )
  }
}
