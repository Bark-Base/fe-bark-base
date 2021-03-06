import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export function PrivateRoute({ children, ...rest }) {
    const {user} = useUser
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}