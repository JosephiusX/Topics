import React from 'react';
import { connect } from '@reduxjs/toolkit';
import ListItem from './ListItem';
import selectTopics from '../selectors/topics';

const List = (props) => (
  <div>
    <h1>Topics List</h1>
    {props.topics.map((topic) => {
      return <ListItem key={topic.id} {...topic} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    topics: selectTopics(state.topics, state.filters)
  };
};

export default connect(mapStateToProps)(List);
