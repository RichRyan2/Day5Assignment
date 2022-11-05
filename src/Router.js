import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberOne from './Components/NumberOne'
import NumberTwo from './Components/NumberTwo'
import NumberThree from './Components/NumberThree'
import NumberFour from './Components/NumberFour'
import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'

function Router() {
    return(
        <>
            <BrowserRouter>
            <NavigationBar />
                <Routes>
                    <Route path="/" element={<NumberOne />}></Route>
                    <Route path="/numberOne" element={<NumberOne />} />
                    <Route path="/numberTwo" element={<NumberTwo />} />
                    <Route path="/numberThree" element={<NumberThree />} />
                    <Route path="/numberFour" element={<NumberFour/>} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router