import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Groups() {

  const { groups } = useSelector((state) => state.groupData);
  // console.log(groups);
  const dispatch = useDispatch();
  const [group, setGroup] = useState();
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log("WORKING");
  }, []);

  return (
    <>
      <div className="App">
        <input
          type='text'
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Student count</th>
              <th>Add students</th>
              <th>Group details</th>
            </tr>
          </thead>
          {groups.filter((group) => {
            if (searchTerm == '') {
              return group
            } else if (group.groupName.toLowerCase().includes(searchTerm.toLowerCase())) {
              return group
            }
          }).map((group, key) => {
            return (
              <tbody>
                <tr key={group.id}>
                  <td>{group.groupName}</td>
                  <td>{group.count}</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      <Link to={'/groups/' + group.id + '/addstudents'} style={{textDecoration: 'none', color: '#fff'}}>+</Link>
                    </button>
                  </td>
                  <td>
                    <Link to={'/groups/' + group.id + '/students'}>See Students</Link>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </>
  );
}

export default Groups;
