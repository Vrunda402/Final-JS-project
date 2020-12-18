import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import BooksRoutes from "../../Books/routes";
import AuthenticationRoutes from '../../Authentication/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <BooksRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;