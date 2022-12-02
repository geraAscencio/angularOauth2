const tokenUrl = (code: string) => {

  const redirectUri = `http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=${code}&code_verifier=QYPAZ5NU8qvtlQerXrUYR-T5AGCjCF47vN-KsaI2A8`;
  return `http://localhost:8080/oauth2/token?client_id=client&redirect_uri=${redirectUri}`;

};

export default tokenUrl;

