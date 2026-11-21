import type { CountryCode } from "./country"

const CountryFlag = ({ country }: { country: CountryCode }) => (
  <svg
    aria-hidden="true"
    className="h-4 w-6 shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_#0002]"
    viewBox="0 0 24 16"
  >
    {country === "us" ? (
      <>
        <rect width="24" height="16" fill="white" />
        <path
          d="M0 0h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0z"
          fill="#b22234"
        />
        <rect width="10.5" height="8.62" fill="#3c3b6e" />
        <path
          d="m1 1 .35 1.08H2.5l-.93.67.36 1.08L1 3.16l-.93.67.36-1.08L-.5 2.08h1.15zm3 0 .35 1.08H5.5l-.93.67.36 1.08L4 3.16l-.93.67.36-1.08-.93-.67h1.15zm3 0 .35 1.08H8.5l-.93.67.36 1.08L7 3.16l-.93.67.36-1.08-.93-.67h1.15zM2.5 4l.35 1.08H4l-.93.67.36 1.08-.93-.67-.93.67.36-1.08L1 5.08h1.15zm3 0 .35 1.08H7l-.93.67.36 1.08-.93-.67-.93.67.36-1.08L4 5.08h1.15zm3 0 .35 1.08H10l-.93.67.36 1.08-.93-.67-.93.67.36-1.08L7 5.08h1.15z"
          fill="white"
          transform="scale(.78)"
        />
      </>
    ) : (
      <>
        <rect width="24" height="16" fill="white" />
        <path d="M0 0h5v16H0zm19 0h5v16h-5z" fill="#d80621" />
        <path
          d="m12 3.1.8 2.1 1.7-.9-.5 2 1.8.4-1.5 1.3 1.1 1.4-2-.1-.4 2-1-1.5-1 1.5-.4-2-2 .1 1.1-1.4-1.5-1.3 1.8-.4-.5-2 1.7.9z"
          fill="#d80621"
        />
      </>
    )}
  </svg>
)

export default CountryFlag
