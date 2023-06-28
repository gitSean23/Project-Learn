import axios from 'axios'
import Link from 'next/link'

const newUserLink = '/new'
const coursesLink = '/courses'

let getAiResponse = async () => {
  const options = {
      method: 'POST',
      url: 'https://openai80.p.rapidapi.com/chat/completions',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1622177290mshd1a3aea86078fefp18acb1jsnc6caa08d41fa',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
        "Accept-Encoding": "gzip"
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: 'Hello!'
          }
        ]
      }
    }

  axios.defaults.maxContentLength = 1000000000000

  try {
    const response = await axios.request(options)
    console.log(response.data.choices[0].message.content)
    return response.data.choices[0].message.content
  } catch(err) {
    console.error(err)
  }
}

export default async function Home() {
  // let aiMsg = getAiResponse()
  return (
    <div>
      <h1>Academy AI</h1>
      {/* <p>{aiMsg}</p> */}
      <h3><Link href={newUserLink}>New</Link></h3>
      <h3>Returning</h3>
    </div>
  )
}
