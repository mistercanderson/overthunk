const requestSentiment = async (message) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    text: message,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return await fetch(
    'https://sentim-api.herokuapp.com/api/v1/',
    requestOptions
  ).then((res) => res.json());
};

export { requestSentiment };
