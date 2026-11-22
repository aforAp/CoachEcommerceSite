import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react"
import { saveSelectedCountry } from "../country"
import type { CountryCode } from "../country"

type AppContextValue = {
  selectedCountry: CountryCode
  setSelectedCountry: (country: CountryCode) => void
  width: number
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [selectedCountry, setSelectedCountryState] =
    useState<CountryCode>();
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
         function SetWidth() {
            setWidth(window.innerWidth);
         }
         SetWidth();
          window.addEventListener("resize", SetWidth);

    return () => window.removeEventListener("resize", SetWidth);
    }, [width]);


  const setSelectedCountry = (country: CountryCode) => {
    setSelectedCountryState(country)
    saveSelectedCountry(country)
  }

  return (
    <AppContext.Provider value={{ selectedCountry, setSelectedCountry, width }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}