export type CountryCode = "us" | "ca"

export const countries: {
  code: CountryCode
  name: string
  currency: string
}[] = [
  { code: "us", name: "United States", currency: "USD" },
  { code: "ca", name: "Canada", currency: "CAD" },
]

const countryStorageKey = "coach-store-country"

export const getCountry = (code: CountryCode) =>
  countries.find((country) => country.code === code) ?? countries[0]

export const readSelectedCountry = (): CountryCode => {
  if (typeof window === "undefined") return "us"
  return window.localStorage.getItem(countryStorageKey) === "ca" ? "ca" : "us"
}

export const saveSelectedCountry = (country: CountryCode) => {
  window.localStorage.setItem(countryStorageKey, country)
}
