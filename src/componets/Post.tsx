import { useGetPostQuery } from "../api"
import Button from "./Button"

function Post({ id }: { id: number }) {
  const { data, error, isLoading } = useGetPostQuery(id)
  if (isLoading) {
    return <>Loading</>
  }

  return (
    <div className="border rounded-lg shadow-md pb-4 p-4 mx-2 my-4 w-150">
      <span className="text-gray-500 text-sm">{data?.id}</span>
      <h3 className="text-xl font-semibold mt-2 h-10 truncate overflow-hidden">
        {data?.title}
      </h3>
      <p className="text-gray-700 text-base truncate h-20 overflow-hidden">
        {data?.body}
      </p>
      <Button to={"MyTest/post/" + id} title="просмотр" />
    </div>
  )
}

export default Post
