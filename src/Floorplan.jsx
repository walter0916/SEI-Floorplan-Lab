import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bathroom from "./Bathroom"

const FloorPlan = (props) => {
  return (
    <div className="floorplan">
      <Kitchen />
      <Bathroom size='Full'/>
      <LivingRoom />
      <Bedroom bedNum ={1}/>
      <Bedroom bedNum ={2}/>
      <Bathroom size ='Half'/>
      <Bedroom bedNum ={3}/>
    </div>
  )
}

export default FloorPlan