import { Routes,Route, Navigate } from "react-router-dom"
import {Home} from '../pages/Home'
import { Login } from "../pages/Login"
import { Start } from "../pages/Start"
import {Play} from '../pages/Play'
import {Results} from '../pages/Results'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/start" element={<Start/>}/>
      <Route path="/play" element={<Play/>}/>
      <Route path="/results" element={<Results/>}/>
      <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
