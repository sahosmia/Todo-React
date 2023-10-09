
import { Link } from "react-router-dom";
import { Plus } from "react-feather";


export default function Navbar({status, onGetModal}) {

  const handleModalShow = () => onGetModal(!status)
  
  return (
    <>
      <Link className="navbar-brand" to="/">
        Sahos Todo
      </Link>

      <div>
        <button className="" onClick={handleModalShow}><Plus/> Add New Task</button>
      </div>
    </>
  );
}
