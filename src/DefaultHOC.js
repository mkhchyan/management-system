import { Link, Outlet } from "react-router-dom";

function DefaultHOC() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Groups
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="addgroups">
                Add Group
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default DefaultHOC;
