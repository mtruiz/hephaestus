import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './components/Icon'
import { Nav, NavLink } from './components/Nav'
import { Home } from './containers/Home'
import { Index } from './containers/Index'
import { Show } from './containers/Show'

library.add(fas)

export const App = () => (
  <div className="flex flex-col h-screen">
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
    <main
      className="
        flex flex-1
        items-center
        justify-center
        bg-white
        text-gray-800
        dark:bg-gray-700
        dark:text-white
      "
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="index" element={<Index />} />
        <Route path="show" element={<Show />} />
      </Routes>
    </main>
  </div>
)
