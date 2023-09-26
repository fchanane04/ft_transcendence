import OffLineContent from "./OffLineContent";
import PopUpUserSetting from "./PopUpUserSetting";

function Body(props) {
  return (
    <div className="body">
      {!props.connected? <OffLineContent /> : <PopUpUserSetting />}
    </div>
  );
}

export default Body;
