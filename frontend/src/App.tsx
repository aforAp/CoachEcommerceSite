import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import CountrySelectorPage from "./components/pages/CountrySelectorPage"
import GiftServices from "./components/pages/GiftServices"
import WelcomeBanner from "./components/pages/WelcomeBanner"
import AtTopList from "./components/pages/AtTopList"
import { AppProvider } from "./components/context/Context"
import MoreThings from "./components/pages/MoreThings"

const HomePage = () => {
  const [mainScrollTop, setMainScrollTop] = useState(0)
  const [menuScrollTop, setMenuScrollTop] = useState(0)
  const isBrandNavHidden = mainScrollTop > 8 || menuScrollTop > 8

  return (
    <div
      className="h-screen overflow-y-scroll"
      onScroll={(event) => setMainScrollTop(event.currentTarget.scrollTop)}
    >
      <div className="z-5 min-h-[102vh]">
        <div
          aria-hidden={isBrandNavHidden}
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
            isBrandNavHidden ? "max-h-0 opacity-0" : "max-h-11 opacity-100"
          }`}
        >
          <NavBar />
        </div>
        <div
          className={`overflow-hidden transition-[height] duration-300 ${
            isBrandNavHidden ? "h-0" : "h-10"
          }`}
        />
        <SearchBar onMenuScroll={setMenuScrollTop} />
        <WelcomeBanner />
        <AtTopList />
        <GiftServices />
        <MoreThings />
      </div>
    </div>
  )
}

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CountrySelectorPage />} path="/country-selector" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  </AppProvider>
)

export default App
