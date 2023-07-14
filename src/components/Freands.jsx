  const TableRow = (props) => {
    return(
      <tr>
      <th scope="row">{props.index+1}</th>
      <td>{props.name} {props.lastname}</td>
    </tr>
    )
  }
  export const Freands = (props) => {
    let users = props.function();
   let usersCount = Object.keys(users).length;
   let userRow = [];
  
    for (let i = 0; i < usersCount; i++) {
   userRow.push (<TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname}/>)
    }
  return (
      <>
      <h2 className="text-center">список друзей</h2>
      <div className="row"> 
      <div className="col-12 mx-auto">
        <table  className="table table-bordered">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col">Имя и фамилия</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
            </tbody>
        </table>
      </div>
    </div>
    </>
      )
  };