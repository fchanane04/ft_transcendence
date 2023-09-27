import Cookies from "js-cookie";
import OffLineContent from "./OffLineContent";
import OnLineContent from "./OnLineContent";


function Body() {
  Cookies.set("userLoggedIn", "token");
  // Cookies.remove('userLoggedIn');
  let userLoggedIn = Cookies.get("userLoggedIn")? true : false;
  console.log(userLoggedIn);
  return (
    <div className={userLoggedIn ? "on-line" : "off-line"}>
      <div className="body">
        {userLoggedIn ? <OnLineContent /> : <OffLineContent />}
      </div>
    </div>
  );
}

export default Body;
