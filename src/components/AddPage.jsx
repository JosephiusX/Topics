import React from 'react';
import { connect } from '@reduxjs/toolkit';
import TopicForm from './TopicForm';
import { addTopic } from '../actions/topics';

const AddPage = (props) => (
  <div>
    <h1>Add Topic</h1>
    <TopicForm
      onSubmit={(topic) => {
        props.dispatch(addTopic(topic));
        props.history.push('/topics');
      }}
    />
  </div>
);

export default connect()(AddPage);