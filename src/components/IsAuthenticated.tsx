
const IsAuthenticated = (WrappedComponent : any) => {
  const EnhancedComponent = (props : any) => {
    const isLoggedIn = props?.user?.isAuthincated

    if(!isLoggedIn){
        return <div>Access Denied.</div>
    }

    return <WrappedComponent {...props}/>
  }

  return EnhancedComponent;
}

export default IsAuthenticated
