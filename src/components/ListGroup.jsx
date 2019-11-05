import React from 'react';
import './ListGroup.css';

export default function WindowListGroup(props) {
  return (
    <div className="list-group">
      {props.children.length ? (
        props.children.map(el => <div className="list-element">{el}</div>)
      ) : (
        <div className="list-element">{props.children}</div>
      )}
    </div>
  );
}
