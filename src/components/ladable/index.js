import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading</div>

export default function (loader , loading = Loading) {
  return Loadable({
    loader,
    loading,
  })
}


