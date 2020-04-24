import Auth from "@aws-amplify/auth";

window.LOG_LEVEL = "DEBUG";

Auth.configure({
  identityPoolId: "eu-west-1:48bca692-b3f6-431b-9229-dc752c00c274",
  region: "eu-west-1",
  userPoolId: "eu-west-1_0qQSGAUIr",
  userPoolWebClientId: "6so126h75lmk99nlviver76tnc",
  oauth: {
    domain: "auth.development.learnerbly.com",
    scope: ["email"],
    redirectSignIn: "https://d2m8k80lil0wn5.cloudfront.net",
    responseType: "code",
  },
});

window.auth = () => Auth.federatedSignIn();
