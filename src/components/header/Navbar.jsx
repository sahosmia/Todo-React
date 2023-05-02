
import { Link } from "react-router-dom";
import { Plus } from "react-feather";


export default function Navbar({status, onGetModal}) {

  const handleModalShow = () => onGetModal(!status)
  
  return (
    <>
      <Link className="navbar-brand" to={"/"}>
        Navbar
      </Link>

      <div>
        <button onClick={handleModalShow}><Plus/> Add New Task</button>
      </div>
    </>
  );
}
