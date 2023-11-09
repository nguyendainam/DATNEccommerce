// privateRouter.tsx
import React from 'react'
import { Route, Navigate, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean
  redirectPath: string
  element: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  redirectPath,
  element,
  ...routeProps
}) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate(redirectPath, { replace: true })
    }
  }, [isAuthenticated, navigate, redirectPath])

  return isAuthenticated ? <Route {...routeProps} element={element} /> : null
}

export default PrivateRoute
