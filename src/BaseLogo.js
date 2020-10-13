import React from 'react'

export const BaseLogo = ({width, upper=false, url=null}) => {

  const scale = width / 1000
  const urlShown = upper ? url.toUpperCase() : url

  return (
  <g transform={`scale(${scale})`}>
    {/* <circle cx={500} cy={500} r={500} style={{fill:'#eee'}}>
    </circle> */}

    {/* <circle cx={500} cy={500} r={490} style={{fill:'deepskyblue'}}>
    </circle> */}

    <circle cx={500} cy={500} r={450}>
    </circle>

    {/* {range(100).map(r => {
      return <circle cx={500} cy={500} r={r*5} style={{fill:'transparent', stroke: 'rgba(255, 255, 255, .3)'}}>
      </circle>
    })} */}

      <g>
      <text alignmentBaseline="text-bottom" x={500} y={500} className="circles-im" style={{fontSize:390}}>{ upper ? 'I' : 'i'}
        <tspan className="circles-im" style={{fill:'deepskyblue'}}>{ upper ? 'M' : 'm'}</tspan>
      </text>
      {/* { urlShown && (
        <text className="circles-im" x={500} y={700} style={{fontSize:50}}>
          {urlShown}
        </text>
      )} */}
      </g>

  </g>
)
}
