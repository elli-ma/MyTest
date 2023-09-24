import { useParams } from "react-router"
import { useGetPostQuery } from "../api"
import Button from "../componets/Button"

export default function PostPage() {
  const params = useParams()
  console.log(params)
  const postId = parseInt(params.id!)
  const { data, error, isLoading } = useGetPostQuery(postId)

  if (isLoading) {
    return <>Loading</>
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="bg-gray-200 p-4 rounded-lg w-1/2 mx-auto h-[300px] flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-4">{data?.title}</h3>
          <p className="text-lg">{data?.body}</p>
        </div>
        <Button to="/" title="Назад" />
      </div>
    </div>
  )
}
