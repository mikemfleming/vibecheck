/* Amplify Params - DO NOT EDIT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

const fetch = require('isomorphic-fetch')

const createUser = username => JSON.stringify({
  query: `
    mutation MyMutation {
      createUser(input: {bio: "", name: "${username}"}) {
        createdAt
      }
    }
  `
})

exports.handler = async event => {
  const body = createUser(event.userName)
  try {
    const response = await fetch('https://tgjjhsslgvhwllnipldbpf7abq.appsync-api.us-east-1.amazonaws.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'da2-lco6y5wdgjfuriphq7snr6kece'
      },
      body,
    })

    await response.json()

    return event
  } catch (err) {
    console.log(`Error: failed to create user ${name}`, err);
    throw err
  }
};
