// mainRoute.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Path } from '../common/enum'
import Home from '../components/Clients/Home'
import MainDashboard from '../components/Dashboard/mainDashboard'
import PrivateRoute from './privateRouter'

const MainRoute: React.FC = () => (
  <Routes>
    <Route path={Path.HOME} element={<Home />} />

    {/* Example of using PrivateRoute */}
    <PrivateRoute
      path='/system/*'
      isAuthenticated={true}
      redirectPath='/login'
      element={<MainDashboard />}
    />
  </Routes>
)

export default MainRoute
