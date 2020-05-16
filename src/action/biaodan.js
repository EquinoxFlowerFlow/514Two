import { TECH_BIAO_DAN , TECH_LIST_DELETE } from '../constants/actionName'


export function getName (options) {
  return {
    type:TECH_BIAO_DAN,
    payload:options
  }
}


export function getDelete (options) {
  return {
    type:TECH_LIST_DELETE,
    payload:options
  }
}



