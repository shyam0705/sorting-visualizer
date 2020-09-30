import React from 'react';
import { Jumbotron } from 'reactstrap';
function Display({ comparingText, swapText,currentMin}) {
    return (
        <Jumbotron style={{ height: "500px", margin: "auto", marginTop: "10px"}}>
            <div className="container">
                <div className="row row-header">
                    <div className="col-md-12">
                        <h1>Algorithm</h1>
                        <hr></hr>
                        <p>{comparingText}</p>
                        <p>{swapText}</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
        )
}
export default Display;