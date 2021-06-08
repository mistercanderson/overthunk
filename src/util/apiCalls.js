export default async function requestSentiment(message) {
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
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res);
  });
}
