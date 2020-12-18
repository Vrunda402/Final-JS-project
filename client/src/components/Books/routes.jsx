import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import Show from './Show';
import New from './New';
import Edit from './Edit';

const Routes = () => {
  const { user } = useContext(UserContext);
  
  return (
    <Switch>
      {/* <Route exact path="/register" component={New} /> */}

      {user && user.token ? (
        <>
          <Route exact path="/books" component={Index} />
          <Route exact path="/books/add" component={New} />
          <Route exact path="/booksProfile/:_id" component={Show} />
          <Route exact path="/booksProfile/edit/:_id" component={Edit} />
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;