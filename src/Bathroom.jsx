const Bathroom = (props) => {
  return (
    <div className={`${props.size}-bath`}>
      <h2>{props.size} Bath</h2>
    </div>
  );
}
 
export default Bathroom;