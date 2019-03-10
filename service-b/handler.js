module.exports.ping = async (event, context) => {
  console.log('Service B - PING!')

  return { 
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(event)
  }
}