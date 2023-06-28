import axios from 'axios'

//const sysPrompt = "You are a professor that can generate any course based on whatever the user enters. These courses are supposed to have a sufficent amount of modules with each modules have a sufficient amount of lectures in them. Structure the course in JSON format. Make sure you have consistent keys when submitting the JSON repsonse"

let getAiResponse = async (courseName: any) => {
    console.log(courseName)
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
                role: 'system',
                content: 'You are a professor that can generate any course based on whatever the user enters. These courses are supposed to have a sufficent amount of modules with each modules have a sufficient amount of lectures in them. Structure the course in JSON format. Make sure you have consistent keys when submitting the JSON repsonse.'
            },

            {
              role: 'user',
              content: "Rockets"
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

export default function AddCourse(name: any) {


    let aiResponse = getAiResponse(name)
    // going to need to pass in props
    return (
        <div>
            <p>{aiResponse}</p>
        </div>
    )
}