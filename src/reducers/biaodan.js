import { TECH_BIAO_DAN } from '../constants/actionName'

const defaultState = {
  data:{
    username:'',
    age:'',
    sex:'',
    ah:'',
  }
}

export default function BiaoDan (state = defaultState , action) {
  switch(action.type){
    case TECH_BIAO_DAN:
      return {...state,data:action.payload};
    default:
      return state
  }
}






