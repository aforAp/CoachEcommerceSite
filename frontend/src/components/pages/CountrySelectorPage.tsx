import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  countries,
  readSelectedCountry,
  saveSelectedCountry,
} from "../country"
import type { CountryCode } from "../country"

const CountrySelectorPage = () => {
  const [selectedCountry, setSelectedCountry] =
    useState<CountryCode>(readSelectedCountry)
  const navigate = useNavigate();

  const handleCountryChange = (value: string) => {
    const nextCountry = countries.find((country) => country.code === value)?.code
    if (!nextCountry) return
    setSelectedCountry(nextCountry)
    saveSelectedCountry(nextCountry)
  }

  return (
    <main className="min-h-dvh bg-white px-5 text-[#111]">
      <header className="flex h-24 items-center justify-center">
        <span className="brand-logo-text text-[48px]">COACH</span>
      </header>
      <section className="mx-auto w-full max-w-[440px] pt-8">
        <h1 className="mb-8 text-center text-xl font-normal">Select your location</h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event.preventDefault()
            navigate("/")
          }}
        >
          <label className="flex flex-col gap-2 text-sm">
            Country
            <select
              className="h-12 w-full appearance-auto rounded-none border border-neutral-400 bg-white px-3 text-base focus:border-black focus:outline-none"
              onChange={(event) => handleCountryChange(event.currentTarget.value)}
              value={selectedCountry}
            >
              <option value="us">United States</option>
              <option value="ca">Canada</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm">
            Language
            <input
              className="h-12 w-full border border-neutral-300 bg-neutral-100 px-3 text-base text-neutral-700"
              readOnly
              value="English"
            />
          </label>
          <span className="flex">
             <label className="text-sm uppercase">
            Currency:</label>
          <span className="-mt-0.5 ml-2">
            {selectedCountry === 'ca' ? "$CAD": "$USD"}
            </span>
            
                    
           </span>
          <button
            className="mt-2 h-12 w-full bg-black text-sm font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-neutral-700"
            type="submit"
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  )
}

export default CountrySelectorPage
