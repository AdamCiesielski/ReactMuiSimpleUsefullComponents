import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import TabsMenu from './components/TabsMenu/TabsMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Homepage />}/>
          
        <Route path="/tabsmenu" element={<TabsMenu />}>
          <Route path="/tabsmenu/exampleone" element={<TabsMenu />}/>
          <Route path="/tabsmenu/exampletwo" element={<TabsMenu />}/>
          <Route path="/tabsmenu/examplethree" element={<TabsMenu />}/>
        </Route>
        <Route path="/anothertabsmenu" element={<TabsMenu />}>
          <Route path="/anothertabsmenu/anotherexampleone" element={<TabsMenu />}/>
          <Route path="/anothertabsmenu/anotherexampletwo" element={<TabsMenu />}/>
          <Route path="/anothertabsmenu/anotherexamplethree" element={<TabsMenu />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
