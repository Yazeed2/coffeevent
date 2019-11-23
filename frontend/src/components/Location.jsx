import React, { Component } from 'react';
import './Location.css'
class Location extends Component {
    render() {
        return (
            <div className="App1">


                {/* select multiple option start  */}
                <select >
                    <option type="checkbox">Al khalidiyyah</option>
                    <option type="checkbox">Ar Rawdah</option>
                    <option type="checkbox">Ash Shati</option>
                    <option type="checkbox">Al Balad</option>
                    <option type="checkbox">As Salamah</option>
                    <option type="checkbox">Al Andalus</option>
                    <option type="checkbox">Al Zahra'a</option>
                    <option type="checkbox">Tahliyah</option>
                </select>
                {/* select multiple option end  */}
                <br /> <br />
                {/* button select start  */}
                <button type="button" className="buttontwo">Event</button> <button type="button" className="buttontwo">Coffee Shop</button>
                {/* button select end  */}
                <br /> <br />
                {/* google Map start  */}
                <div>google Map</div>
                {/* google Map end  */}
                <br /> <br />
                {/* next button start  */}
                <button className="buttonNext">next</button>
                {/* next button end  */}


               </div>
        );
    }
}

export default Location;