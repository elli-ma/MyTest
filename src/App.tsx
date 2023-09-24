import "./App.css"
import Post from "./componets/Post"
import { FixedSizeList, ListChildComponentProps } from "react-window"

function App() {
  const Row = ({ index, style }: ListChildComponentProps) => {
    return <div style={style}>{<Post id={(index % 100) + 1} />}</div>
  }
  console.log(Row)
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <FixedSizeList height={800} width={800} itemSize={220} itemCount={1000}>
          {Row}
        </FixedSizeList>
      </div>
    </div>
  )
}

export default App
