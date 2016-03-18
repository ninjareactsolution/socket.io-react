import React, { createFactory, PropTypes } from 'react';

function socketConnect(Target) {
  function SocketConnect(props, context) {
    props.socket = context.socket;

    return createFactory(Target)(props);
  }

  SocketConnect.contextTypes = {
    socket: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.object
    ]),
  }

  return SocketConnect;
}

export default socketConnect;
