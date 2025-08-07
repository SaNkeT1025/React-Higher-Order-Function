import React from 'react'

const FirstHoc = (WrappedComponent: any) => {
  const EnhancedComponent = (props: any) => {
    console.log(props)
    return <WrappedComponent {...props}/>
  }
  return EnhancedComponent;
}

export default FirstHoc
