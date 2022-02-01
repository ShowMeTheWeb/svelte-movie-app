exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'SMTW',
      age: 37,
      email: 'vaccine1220@naver.com'
    })
  }
}