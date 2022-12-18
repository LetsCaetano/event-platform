import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event";

const GET_LESSIONS_QUERY = gql`
  query {
      lessons {
        id
        title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSIONS_QUERY)
  return (
    // <ul>
    //   {data?.lessons.map(lesson => {
    //     return <li key={lesson.id}>{lesson.title}</li>
    //   })}
    // </ul>
    <Event />
  )
}

export default App
