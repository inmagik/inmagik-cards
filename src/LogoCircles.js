import React from 'react'
import { BaseLogo } from './BaseLogo'
import './LogoCircles.css'
import { range } from 'lodash'

export default class LogoCircles extends React.PureComponent {

  render(){
    const { width, height, upper, url, colors, delta, circles } = this.props
    const cx = width / 2
    const cy = height / 2

    const minDim = Math.min(width, height)
    const maxDim = Math.max(width, height)
    const margin = minDim * 0.1
    const logoWidth = minDim - margin * 2

    const num = maxDim / delta

    const logoTranslate = width > height ? [cx-cy+margin, margin] : [margin, cy-cx+margin]

    return (
      <svg width={width} height={height}
        xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}
        >
        { circles && range(num).map(i => (
          <circle key={i} cx={cx} cy={cy} r={logoWidth/2 + (num * delta) - (i * delta)} style={{fill:colors[i % colors.length]}}></circle>
        ))}
        <g transform={`translate(${logoTranslate[0]}, ${logoTranslate[1]})`}>
          <BaseLogo width={logoWidth} upper={upper} url={url}/>
        </g>
      </svg>
    )
  }
}

LogoCircles.defaultProps = {
  width: 500,
  height: 500,
  upper: true,
  url: 'inmagik.com',
  circles: true,
  colors: ["#ccc", "#bbb", "#aaa"],
  delta: 20,
}
