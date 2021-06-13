export default async function requestSentiment(message) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ text: message }),
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
