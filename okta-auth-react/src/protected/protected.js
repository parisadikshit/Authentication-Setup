
import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
const RequiredAuth = ({children}) =>{
   
    const { oktaAuth, authState } = useOktaAuth();
      
    if (!authState?.isAuthenticated) {
        if (!authState?.isPending) {
           oktaAuth.signInWithRedirect('/');
          }
          return ;
    }
      
    return <React.Fragment>{children}</React.Fragment>;

}

const Protected = ({element, ...props}) =>{
    const WrappedComponent = (wrappedProps) => <RequiredAuth>{element}</RequiredAuth>;
    return <><WrappedComponent /></>;
    
}
export default Protected;