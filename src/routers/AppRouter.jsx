import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import TopicsPage from '../components/TopicsPage';
import AddPage from '../components/AddPage';
import EditPage from '../components/EditPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch> 
        {/* TOPICS */}
        <Route path="/" component={TopicsPage} exact={true} />
        <Route path="/create_topic" component={AddPage} />
        <Route path="/edit_topic/:id" component={EditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;