import * as React from 'react'

export function DynamicLogo({
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="256" height="256" rx="80" className="fill-foreground" />
      <rect
        x="19.5"
        y="19.5"
        width="217"
        height="217"
        rx="61"
        className="stroke-background"
        strokeOpacity="0.29"
        strokeWidth="2"
      />
      <rect
        x="25.5"
        y="25.5"
        width="205"
        height="205"
        rx="56.5"
        className="stroke-background"
        strokeOpacity="0.8"
        strokeWidth="2"
      />
      <path
        d="M99.3239 153H85.3054V102.455H100.41C105.148 102.455 109.204 103.458 112.577 105.466C115.95 107.473 118.533 110.352 120.327 114.104C122.137 117.839 123.034 122.322 123.017 127.555C123.001 132.902 122.063 137.476 120.203 141.277C118.344 145.061 115.654 147.965 112.133 149.989C108.612 151.996 104.342 153 99.3239 153ZM88.3904 150.137H99.2005C103.709 150.137 107.51 149.24 110.603 147.447C113.696 145.637 116.032 143.046 117.612 139.673C119.208 136.3 119.998 132.26 119.981 127.555C119.981 122.915 119.216 118.941 117.686 115.634C116.156 112.31 113.926 109.76 110.998 107.983C108.085 106.206 104.515 105.317 100.286 105.317H88.3904V150.137ZM173.556 118.25H170.397C170.068 116.539 169.451 114.885 168.546 113.289C167.641 111.677 166.473 110.229 165.042 108.945C163.627 107.646 161.981 106.617 160.106 105.86C158.23 105.104 156.157 104.725 153.886 104.725C150.562 104.725 147.502 105.614 144.705 107.391C141.924 109.151 139.695 111.743 138.017 115.165C136.355 118.587 135.524 122.775 135.524 127.727C135.524 132.713 136.355 136.917 138.017 140.339C139.695 143.761 141.924 146.353 144.705 148.113C147.502 149.857 150.562 150.729 153.886 150.729C156.157 150.729 158.23 150.359 160.106 149.619C161.981 148.862 163.627 147.842 165.042 146.558C166.473 145.259 167.641 143.802 168.546 142.19C169.451 140.578 170.068 138.916 170.397 137.205H173.556C173.194 139.245 172.495 141.244 171.458 143.202C170.438 145.16 169.089 146.937 167.411 148.533C165.749 150.112 163.783 151.371 161.512 152.309C159.258 153.23 156.716 153.691 153.886 153.691C149.674 153.691 145.964 152.622 142.755 150.483C139.547 148.327 137.029 145.3 135.203 141.4C133.393 137.501 132.488 132.943 132.488 127.727C132.488 122.511 133.393 117.954 135.203 114.054C137.029 110.155 139.547 107.136 142.755 104.997C145.964 102.841 149.674 101.763 153.886 101.763C156.716 101.763 159.258 102.232 161.512 103.17C163.783 104.092 165.749 105.342 167.411 106.922C169.089 108.485 170.438 110.245 171.458 112.203C172.495 114.161 173.194 116.177 173.556 118.25Z"
        className="fill-background"
      />
    </svg>
  )
}
