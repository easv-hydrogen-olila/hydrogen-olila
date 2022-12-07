import * as React from "react"
import { SVGProps } from "react"

// Convert SVG into react component (typescrypt) ** https://react-svgr.com/playground/?typescript=true **

interface Props {
    height?: number,
    width?: number,
    color?: string
}

export const IconAccount = ({height, width, color, ...props}: Props & SVGProps<SVGSVGElement>) => (
    <svg
    width={width}
    height={height}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 50 50"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h48v48H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export const IconCart = ({height, width, color, ...props}: Props & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} {...props} viewBox="0 0 50 50">
    <path d="M0 0h48v48H0z" fill={color? color: 'none'} />
    <path d="M14.857 28.896 9.923 40H40v-4H16.078l2.222-5h20.142l6.333-19H13.441l-2-6H4v4h4.559l6.298 18.896zM39.225 16l-3.667 11H18.441l-3.667-11h24.451z" />
    <circle cx={20} cy={42} r={2} />
    <circle cx={32} cy={42} r={2} />
  </svg>
)

export const IconFavorite = ({height, width, color, ...props}: Props & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} {...props} viewBox="0 0 50 50">
    <path d="M0 0h48v48H0z" fill="none" />
    <path d="M8.444 27 24 42l15.556-15A11.1 11.1 0 0 0 44 18.111C44 11.978 39.022 7 32.889 7A11.095 11.095 0 0 0 24 11.456 11.095 11.095 0 0 0 15.111 7C8.978 7 4 11.978 4 18.111A11.1 11.1 0 0 0 8.444 27zm6.667-16a7.049 7.049 0 0 1 5.687 2.853L24 18.128l3.202-4.275A7.049 7.049 0 0 1 32.889 11 7.12 7.12 0 0 1 40 18.111a7.076 7.076 0 0 1-2.851 5.694l-.195.147-.176.169L24 36.443 11.221 24.121l-.176-.169-.195-.147A7.077 7.077 0 0 1 8 18.111 7.12 7.12 0 0 1 15.111 11z" />
    </svg>
)

export const IconSearch = ({height, width, color, ...props}: Props & SVGProps<SVGSVGElement>) =>(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 50 50"
    {...props}
  >
    <path d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z" />
  </svg>
)

export const IconClose = ({height, width, color, ...props}: Props & SVGProps<SVGSVGElement>) =>(
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  className="w-5 h-5"
>
  <title>Close</title>
  <line
    x1="4.44194"
    y1="4.30806"
    x2="15.7556"
    y2="15.6218"
    stroke="currentColor"
    strokeWidth="1.25"
  />
  <line
    y1="-0.625"
    x2="16"
    y2="-0.625"
    transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
    stroke="currentColor"
    strokeWidth="1.25"
  />
</svg>
)
