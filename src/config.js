const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-15fckezl17vcy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8aywnwdm7i.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_KE5ecRzz6",
    APP_CLIENT_ID: "3e5git4b9mtru4e0fa32db6vpf",
    IDENTITY_POOL_ID: "us-east-1:e296bde9-edf0-4064-9f92-ce211d41d5a1"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-qktueczby4lv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://nts7rm2ee7.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_S4Ei3mc45",
    APP_CLIENT_ID: "5d6sbmc4c1i9oprq6t306rpdni",
    IDENTITY_POOL_ID: "us-east-1:257ee220-41f2-4886-ac2f-ddd47549a638"
  }
}

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
