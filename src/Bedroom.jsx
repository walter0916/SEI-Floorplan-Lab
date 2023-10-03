const Bedroom = (props) => {
  return (
    <div className={`Bedroom-${props.bedNum}`}>
      <h2>Bedroom {props.bedNum}</h2>
    </div>
  );
}
export default Bedroom;