# Authentication-Setup

Step 1: Create react application

        npx create-react-app <your-app-name>
        
Step 2: Installing necessary okta packages with npm 
        
        npm install @okta/okta-auth-js
       
        npm install @okta/okta-react
        
Step 3: Configure Okta authentication in React App

        const oktaAuth = new OktaAuth({
          issuer: `${process.env.REACT_APP_AUTHORIZATION_SERVER_URI}`,
          clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
          redirectUri: window.location.origin + '/login/callback',
          scopes: ['openid', 'profile', 'email'],
          responseType:'code',
          pkce: true

        })
        
Step 4: Create the routes necessary for your applications and wrap those in okta's Security Component and also add the login callback route in your routes 

        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/login/callback' element={<LoginCallback/>}/>
            <Route path='/home' element={<Home/>}/>
         </Routes>
        </Security>

