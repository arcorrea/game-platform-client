import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

// TODO ARC: utilizar los secret de github
export const b2cPolicies = {
     names: { //Azure user flow or custom policies
         signUpSignIn: "B2C_1_signupsignin1",
     },
     authorities: {
         signUpSignIn: {
             authority: "https://arcb2c.b2clogin.com/arcb2c.onmicrosoft.com/B2C_1_signupsignin1",
         },
     },
     authorityDomain: "arcb2c.b2clogin.com"
 };


export const msalConfig: Configuration = {
     auth: {
         clientId: 'f696247b-13e1-4499-b741-fd7f1e92c290',
         authority: b2cPolicies.authorities.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/',
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE,
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = { //API paths and scopes
  todoListApi: {
    endpoint: "https://localhost:5001/game-api/todolist",
    scopes: ["https://arcb2c.onmicrosoft.com/game-api/tasks.read"],
  },
}
export const loginRequest = {
  scopes: []
};
