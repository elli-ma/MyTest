import { Link } from "react-router-dom"

interface ButtonProps {
  to: string
  title: string
}

function Button({ to, title }: ButtonProps) {
  return (
    <div>
      <Link
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        to={to}
      >
        {title}
      </Link>
    </div>
  )
}

export default Button
