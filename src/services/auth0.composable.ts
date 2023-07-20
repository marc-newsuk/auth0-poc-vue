import auth0 from 'auth0-js';

const config = JSON.parse(
  decodeURIComponent(escape(window.atob('@@config@@')))
);

const params = {
  overrides: {
    __tenant: config.auth0Tenant,
    __token_issuer: config.authorizationServer.issuer
  },
  domain: config.auth0Domain,
  clientID: config.clientID,
  redirectUri: config.callbackURL,
  responseType: 'code',
  ...config.internalOptions
}

const databaseConnection = 'Username-Password-Authentication';
const webAuth = new auth0.WebAuth(params);

function renderCaptcha(element: HTMLElement | undefined) {
  if (element) {
    webAuth.renderCaptcha(element);
  }
}
function loginWithEmail(email: string, password: string, callback: any) {
  webAuth.login({
    realm: databaseConnection,
    username: email,
    password: password,
  }, callback);
}

function loginWithGoogle() {
  webAuth.authorize({
    connection: 'google-oauth2'
  });
}

export function useAuth0() {
  return {
    renderCaptcha,
    loginWithEmail,
    loginWithGoogle
  }
}