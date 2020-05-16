import React from 'react';
import { BrowserRouter , Route , Switch , NavLink} from 'react-router-dom'
import { FormList , DataList} from './assembly'

export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/list' component={DataList} />
          <Route path='/' component={FormList} />
        </Switch>
      </BrowserRouter>
    )
  }
}







