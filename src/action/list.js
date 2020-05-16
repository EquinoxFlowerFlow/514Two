import { TECH_LIST_ADD } from '../constants/actionName'

export function getData (options) {
  return {
    type:TECH_LIST_ADD,
    payload:options
  }
}

