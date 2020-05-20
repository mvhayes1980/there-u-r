import React, {useState} from 'react';
import {Table} from 'reactstrap';

let zomatoDisplay = props =>  {

    return(
        <Table>
            <thead>
                <tr>
                    <th>Resturant</th>
                    <th>Location</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.url}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default zomatoDisplay;