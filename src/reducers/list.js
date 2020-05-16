import _ from 'loadsh'
import { TECH_LIST_ADD , TECH_LIST_DELETE } from '../constants/actionName'

const defaultState = {
  data:[
    
  ],
  id:1
}

export default function (state=defaultState , action) {
  switch(action.type){
    case TECH_LIST_ADD:
      var id = state.data.findIndex(item => {
        return item.id == action.payload.id
      })
      console.log(id,'传过来的id值')
      if(id != -1){
        state.data.splice(id,1,action.payload)
      }else{
        state.data.push({...action.payload,id:state.id++})
      }
      return {...state,data:_.cloneDeep(state.data)}
    case TECH_LIST_DELETE:
      var obj = state.data.filter(item => {
        return item.id != action.payload.id
      })
      state.data = obj
      return {...state,data:_.cloneDeep(state.data)}
    default:
      return state
  }
}



