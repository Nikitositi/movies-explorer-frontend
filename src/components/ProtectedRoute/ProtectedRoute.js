import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/signin' />
        )
      }
    </Route>
  );
}

export default ProtectedRoute;