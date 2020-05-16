import React from 'react';
import Loadable from '@@/ladable'

const FormList = Loadable ( () => import('##/form'));
const DataList = Loadable ( () => import ('##/dataList'))

export {
  FormList,
  DataList
}

