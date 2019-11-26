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
    data: data1
  }
    render() {
        return (
            <div>
        <article className="main-intro">
          <Jumbotron fluid className="jumbotron-style">
            <Container className="jumbotron-content">
              <div style={{ margin:'0 auto', width:'350px', backgroundColor: 'rgba(159, 151, 157, 0.5)'}}>
              <h1 style={{opacity:'1'}}>Hello i will be the filter search</h1>
              <p>is this width ok? what do you think hamed, can you work with this? I will create a set width and height this box will not be responsive</p>
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
