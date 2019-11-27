import React, { Component } from 'react'
import { Row, Button, Jumbotron, Container, Carousel } from 'react-bootstrap'
import HomePage from './HomePage'
import Search from './Search/Search'
import data1 from '../Tempdata'
export default class Home extends Component {
  state = {
    arry: [1, 2, 3, 4],
    showAll: true,
    hideThem: false,
    data: data1,
    district: "",
    intrest:"",
    date:"",
    timeFrom: "",
    timeuntill: "",
    cost: ""
  }
// axios.get('/:')
  componentDidUpdate(){
    console.log(this.state.district)
    console.log(this.state.intrest)
    console.log(this.state.date)
    console.log(this.state.timeFrom)
    console.log(this.state.timeuntill)
    console.log(this.state.cost)
  }
  // user.find('dheoj')
    render() {
        return (
            <div>
        <article className="main-intro">
          <Jumbotron fluid className="jumbotron-style">
            <Container className="jumbotron-content">
              <div className="FilterDiv">
              {/* <h1 style={{opacity:'1'}}>Hello i will be the filter search</h1> */}


<div class="App1">
  <br/><br/>

  <select className="selectFilterBar" style={{background: 'url(https://i.imgur.com/2zQdQE4.png) 96% / 8% no-repeat #eee'}} onChange={(e)=>{this.setState({district:e.target.value})}}>
      <option  value="" selected="selected" disabled="disabled">choose District</option>
                 <option value="Al khalidiyyah"  >Al khalidiyyah</option>
                 <option  value="Ar Rawdah">Ar Rawdah</option>
                 <option  value="Ash Shati">Ash Shati</option>
                 <option  value="Al Balad">Al Balad</option>
                 <option  value="As Salamah">As Salamah</option>
                 <option  value="Al Andalus">Al Andalus</option>
                 <option  value="Al Zahra'a">Al Zahra'a</option>
                 <option value="Tahliyah" >Tahliyah</option>
             </select>
 

             <br /> <select className="selectFilterBar" style={{background: 'url(https://i.imgur.com/pwzVQOZ.png) 96% / 10% no-repeat #eee'}}  onChange={(e)=>{this.setState({intrest:e.target.value})}}>
               <option  value="" selected="selected" disabled="disabled">I'm Interesting in..</option>
                 <option  value="Art & Design">Art & Design</option>
                 <option value="Music" >Music</option>
                 <option  value="Book Reading">Book Reading</option>
                 <option  value="Discussion">Discussion</option>
                 <option  value="Games">Games</option>
                 <option  value="Lifestyle">Lifestyle</option>
                 <option  value="Education">Education</option>
                 <option  value="Coffee Tasting">Coffee Tasting</option>
                 <option value="Film & Media" >Film & Media</option>

             </select>

             <br /> <select className="selectFilterBar"  onChange={(e)=>{this.setState({date:e.target.value})}} >
                  <option value="" selected="selected" disabled="disabled">I'm Available...</option>
                 <option value="Any Date" >Any Date</option>
                 <option  value="Today">Today</option>
                 <option  value="Tomorrow">Tomorrow</option>
                 <option value="This Weekend" >This Weekend</option>
                 <option value="This Week" >This Week</option>
                 <option value="Next Week" >Next Week</option>
                 <option value="Pick a Date" >Pick a Date...</option>
             </select>

             <br />  <select className="selectFilterBar" style={{background: 'url(https://i.imgur.com/FIqM5Ub.png) 96% / 10% no-repeat #eee'}}  onChange={(e)=>{this.setState({timeFrom:e.target.value})}}>
                  <option value="" selected="selected" disabled="disabled">I'm free From...</option>
                 <option value="9AM">9:00 AM</option>
                 <option value="10AM">10:00 AM</option>
                 <option value="11AM">11:00 AM</option>
                 <option value="12PM">12:00 PM</option>
                 <option value="1PM">1:00 PM</option>
                 <option value="2PM">2:00 PM</option>
                 <option value="3PM">3:00 PM</option>
                 <option value="4PM">4:00 PM</option>
                 <option value="5PM">5:00 PM</option>
                 <option value="6PM">6:00 PM</option>
                 <option value="7PM">7:00 PM</option>
                 <option value="8PM">8:00 PM</option>
                 <option value="9PM">9:00 PM</option>
                 <option value="10PM">10:00 PM</option>
             </select>

             <br />  <select className="selectFilterBar" style={{background: 'url(https://i.imgur.com/FIqM5Ub.png) 96% / 10% no-repeat #eee'}}  onChange={(e)=>{this.setState({timeuntill:e.target.value})}}>
                  <option   value="" selected="selected" disabled="disabled">I'm free Untill...</option>
                 <option value="9AM">9:00 AM</option>
                 <option value="10AM">10:00 AM</option>
                 <option value="11AM">11:00 AM</option>
                 <option value="12PM">12:00 PM</option>
                 <option value="1PM">1:00 PM</option>
                 <option value="2PM">2:00 PM</option>
                 <option value="3PM">3:00 PM</option>
                 <option value="4PM">4:00 PM</option>
                 <option value="5PM">5:00 PM</option>
                 <option value="6PM">6:00 PM</option>
                 <option value="7PM">7:00 PM</option>
                 <option value="8PM">8:00 PM</option>
                 <option value="9PM">9:00 PM</option>
                 <option value="10PM">10:00 PM</option>
             </select>

             <br /> 
              <select  className="selectFilterBar" style={{background: 'url(https://i.imgur.com/ne0uAxr.png) 96% / 10% no-repeat #eee'}} onChange={(e)=>{this.setState({cost:e.target.value})}}>
                 <option value="" selected="selected" disabled="disabled">I prefer...</option>
                 <option value="Free">Free</option>
                 <option value="Paid">Paid</option>
             </select>

             <br />                

<br />


             <button onClick={()=>{console.log(this.state.timeuntill)}} class="buttonSearchzz">Search</button>

             <br />
             <br />
         </div>



              
              </div>
            </Container>
          </Jumbotron>
        </article>
        <Search/>
        <h1 className="Section-Title">THIS MONTH'S EVENTS</h1>
        <Row>
          {this.state.arry.map(() => {
            return <HomePage />
          })}
        </Row>
        {this.state.showAll ?
          <div style={{ textAlign: 'center' }}>
            <Button className="ShowHideButton" onClick={() => { this.setState({ arry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], showAll: false, hideThem: true }) }}>Show all</Button>
          </div>
          : null}
        {this.state.hideThem ?
          <div style={{ textAlign: 'center' }}>
            <Button className="ShowHideButton" onClick={() => { this.setState({ arry: [1, 2, 3, 4], showAll: true, hideThem: false }) }}>Hide</Button>
          </div>
          : null}
            </div>
        )
    }
}





