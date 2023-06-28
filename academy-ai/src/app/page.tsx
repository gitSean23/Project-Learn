import axios from 'axios'
import Link from 'next/link'

const newUserLink = '/new'
const coursesLink = '/courses'



export default async function Home() {
  // let aiMsg = getAiResponse()
  return (
    <div>
      <h1>Academy AI</h1>
      {/* <p>{aiMsg}</p> */}
      <h3><Link href={newUserLink}>New</Link></h3>
      <h3><Link href={coursesLink}>Add Course</Link></h3>
      <h3>Returning</h3>
    </div>
  )
}
