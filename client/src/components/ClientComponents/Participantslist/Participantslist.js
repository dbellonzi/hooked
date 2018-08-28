import React, {Component} from 'react'

const Participantslist = (props) => {
    return (  
        <React.Fragment>
            <h1>Current Registered Participants</h1>
            <table className="table table-striped p-1">
                <tr className=" bg-primary white-text" >
                    <th scope="col">ID#</th>
                    <th scope="col">Name</th>
                </tr>
           
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Keith Nguyen</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>BeBe Dao</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Daniel Bellonzi</td>
                </tr>
                </tbody>

            </table>
        </React.Fragment>
    );
}
 
export default Participantslist;