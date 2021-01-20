import React, {useState, usEffect, useEffect} from 'react';
import ListItem from './ListItem'

export default function DashboardTable() {
    // create a variable/state coaches
    // create a method setCoaches to save the coaches
    // initialize it as an Empty array
    
    const [coaches, setCoaches] = useState([]);
    // when or after the component is loaded I will run this function

    useEffect(() => {
        fetch ('https://hezlin-coach.herokuapp.com/api/coaches')
        
        .then (
            function (response) {
                if (response.status !== 200) {
                    console.log ('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    },[])

    return (
        <div className="card">
  <div className="card-header text-light" style={styles.bgMain}>
    Recent Booking
</div>
<div className="card-body">
    <table className="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>Coach Name</th>
                <th>Location</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
           {
               coaches.map(val => {
                   return (
                       <ListItem coach = {val} key={val._id}/>
                   )
               })
           }
        </tbody>
    </table>
</div>
</div>
    )
}

const styles = {
    bgMain : {
        backgroundColor: 'rgb(220,60,50)'
    }
}