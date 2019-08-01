import React from 'react'
import classNames from 'classnames'

const Container = ({className, small, medium, fluid, text, ...props}) => (
  <div
    {...props}
    className={classNames('Container', {fluid, small, medium, text}, className)}
  />
)
export default Container
