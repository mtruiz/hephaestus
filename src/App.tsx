import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';

import { Nav, NavLink } from './components/Nav'
import { Home } from './containers/Home'
import { Index } from './containers/Index'
import { Show } from './containers/Show'

export const App = () => (
  <>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="index">Index</NavLink>
      <NavLink to="show">Show</NavLink>
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
