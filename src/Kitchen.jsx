import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = (props) => {
  return (
    <div className="Kitchen">
      <h2 className="kitchen-text">Kitchen</h2>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen