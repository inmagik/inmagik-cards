import React from 'react'
import { Link } from 'react-router-dom'
import LogoCircles from '../../src/LogoCircles'
import tinycolor from 'tinycolor2'
import { range } from 'lodash'

export default class Home extends React.PureComponent {
  render() {

    const deepskyblue =  tinycolor('black')
    console.log(deepskyblue)
    return (
      <div>
        <div>
          <LogoCircles circles={false}/>
          <LogoCircles url={""}/>
          <LogoCircles upper={false} colors={['black']}/>
          <LogoCircles upper={false} delta={50}/>
          <hr/>
          <LogoCircles upper={false} width={300}/>
          <LogoCircles upper={false} width={300} colors={['#ccc', '#bbb', '#aaa', 'hotpink']} delta={10} url={null}/>
          <LogoCircles upper={false} width={300} colors={['#ccc', '#bbb', '#aaa']} delta={5}/>
          <LogoCircles upper={false} width={300}
            colors={['#ccc', '#bbb', '#aaa', 'deepskyblue',
              '#ccc', '#bbb', '#aaa', 'dodgerblue',
              '#ccc', '#bbb', '#aaa', 'yellow']} delta={5}/>
          <hr/>
          <LogoCircles upper={false} width={400} height={300}/>
        </div>

      </div>
    )
  }
}
