import React from 'react';
import { NavLink } from 'react-router-dom';

import ListFilters from './ListFilters';
import List from './List';

const TopicsPage = () => (
  <div>
    <NavLink to="/create_topic" activeClassName="is-active">Create Topic</NavLink>
    <ListFilters />
    <List />
  </div>
);

export default TopicsPage;
   