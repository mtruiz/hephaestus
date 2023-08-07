import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import { Icon } from './components/Icon'
import { Nav, NavLink } from './components/Nav'
import { Home } from './containers/Home'
import { Index } from './containers/Index'
import { Show } from './containers/Show'

library.add(fas)

export const App = () => (
  <>
    <Nav>
      <NavLink to="/">
        <Icon name="house" /> Home
      </NavLink>
      <NavLink to="index">
        <Icon name="table-list" /> Index
      </NavLink>
      <NavLink to="show">
        <Icon name="file" /> Show
      </NavLink>
    </Nav>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="index" element={<Index />} />
        <Route path="show" element={<Show />} />
      </Routes>
    </div>
  </>
)
