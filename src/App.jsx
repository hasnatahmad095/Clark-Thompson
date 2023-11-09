import './App.css';
import React from "react"
import Data from "./Data"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiMagnifyingGlass } from "react-icons/gi"

class App extends React.Component {

  state = {
    info: Data,
  }
  render() {

    let content = this.state.info.map((item, i) => {
      return (
        <>
          <Navbar bg="black" expand="lg">
            <Container>
              <Navbar.Brand href="#home" className='fw-bold text-light' >{item.navbar.logo}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className=' ms-5 d-flex justify-content-end' id="basic-navbar-nav">
                <Nav>
                  <Nav.Link className='ms-5 fw-semibold text-light' href="#home">{item.navbar.li1}</Nav.Link>
                  <Nav.Link className='ms-4 fw-semibold text-light' href="#link">{item.navbar.li2}</Nav.Link>
                  <Nav.Link className='ms-4 fw-semibold text-light' href="#link">{item.navbar.li3}</Nav.Link>
                  <Nav.Link className='ms-4 fw-semibold text-light' href="#link">{item.navbar.li4}</Nav.Link>
                  <Nav.Link className='ms-4 fw-semibold text-light' href="#link">{item.navbar.li5}</Nav.Link>
                  <Nav.Link className='ms-4 fw-semibold text-light' href="#link">{item.navbar.li6}</Nav.Link>
                  <Nav.Link className='ms-4 fw-semibold text-light' href="#link">{item.navbar.li7}</Nav.Link>
                  <Nav.Link className='ms-4 fw-semibold text-light' href="#link">{item.navbar.li8}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>


          <Container fluid className="sec1 p-5 m-0 bg-black">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12} className='p-5 m-auto'>
                <p className='fw-bold text-warning'>{item.section1.s1t1}</p>
                <h1 className='text-light fw-bold'>{item.section1.s1t2}<span className='text-warning'>{item.section1.s1t3}</span></h1>
                <h1 className='text-warning fw-bold'>{item.section1.s1t4}</h1>
                <h5 className='text-light mt-3'>{item.section1.s1t5}</h5>
                <Button className='rounded-pill fw-bold mt-2' variant="warning">{item.section1.s1btn1}</Button>
                <Button className='rounded-pill fw-bold mt-2 ms-2' variant="outline-light">{item.section1.s1btn2}</Button>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='p-0 m-0'>
                <img className='w-100' src={item.section1.s1img1} alt="" />
              </Col>

            </Row>
          </Container>


          <Container fluid className="sec1 pt-3 m-0 bg-black">
            <Row className="mt-4 p-0">

              <Col lg={6} md={6} sm={12} xs={12} className='p-0 m-0'>
                <img className='w-100' src={item.section1.s1img1} alt="" />
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='p-5 m-auto'>
                <h1 className='text-light fw-bold'>{item.section2.s2t1}</h1>
                <p className='text-secondary mt-3'>{item.section2.s2t2}</p>

                <p className='text-light fw-semibold mt-5'>{item.section2.s2t3} <span className='text-secondary'>{item.section2.s2t4}</span></p>
                <p className='text-light fw-semibold'>{item.section2.s2t5} <span className='text-secondary'>{item.section2.s2t6}</span></p>
                <p className='text-light fw-semibold'>{item.section2.s2t7} <span className='text-secondary'>{item.section2.s2t8}</span></p>
                <p className='text-light fw-semibold'>{item.section2.s2t9} <span className='text-secondary'>{item.section2.s2t10}</span></p>
                <p className='text-light fw-semibold'>{item.section2.s2t11} <span className='text-secondary'>{item.section2.s2t13}</span></p>
                <p className='text-light fw-semibold'>{item.section2.s2t13} <span className='text-secondary'>{item.section2.s2t14}</span></p>
                <h5 className='text-warning fw-semibold mt-5'>{item.section2.s2t15} <span className='text-light'>{item.section2.s2t16}</span></h5>
                <Button className='rounded-pill fw-semibold mt-4' variant="warning">{item.section2.s2t17}</Button>

              </Col>

            </Row>
          </Container>


          <Container fluid className="sec1 pt-5 pb-4 m-0 bg-black d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-light text-center'>{item.section3.s3t1}</h1>
            <p className='text-secondary text-center mt-3'>{item.section3.s3t2}</p>
            <Row className="mt-3 p-0 gap-4 d-flex justify-content-center">
              <Col lg={5} md={5} sm={12} xs={12} className='bg-dark pt-4 ps-5 m-0'>
                <h1 className='text-warning fw-bold'>{item.section3.s3t3}</h1>
                <p className='text-light'>{item.section3.s3t4}</p>
                <p className='text-secondary'>{item.section3.s3t5}</p>
                <p className='text-secondary'>{item.section3.s3t6}</p>
              </Col>

              <Col lg={5} md={5} sm={12} xs={12} className='bg-dark pt-4 ps-5 m-0'>
                <h1 className='text-warning fw-bold'>{item.section3.s3t3}</h1>
                <p className='text-light'>{item.section3.s3t4}</p>
                <p className='text-secondary'>{item.section3.s3t5}</p>
                <p className='text-secondary'>{item.section3.s3t6}</p>
              </Col>
            </Row>

            <Row className="mt-4 p-0 gap-4 d-flex justify-content-center">
              <Col lg={5} md={5} sm={12} xs={12} className='bg-dark pt-4 ps-5 m-0'>
                <h1 className='text-warning fw-bold'>{item.section3.s3t3}</h1>
                <p className='text-light'>{item.section3.s3t4}</p>
                <p className='text-secondary'>{item.section3.s3t5}</p>
                <p className='text-secondary'>{item.section3.s3t6}</p>
              </Col>

              <Col lg={5} md={5} sm={12} xs={12} className='bg-dark pt-4 ps-5 m-0'>
                <h1 className='text-warning fw-bold'>{item.section3.s3t3}</h1>
                <p className='text-light'>{item.section3.s3t4}</p>
                <p className='text-secondary'>{item.section3.s3t5}</p>
                <p className='text-secondary'>{item.section3.s3t6}</p>
              </Col>
            </Row>

            <Row className="mt-4 p-0 gap-4 d-flex justify-content-center">
              <Col lg={5} md={5} sm={12} xs={12} className='bg-dark pt-4 ps-5 m-0'>
                <h1 className='text-warning fw-bold'>{item.section3.s3t3}</h1>
                <p className='text-light'>{item.section3.s3t4}</p>
                <p className='text-secondary'>{item.section3.s3t5}</p>
                <p className='text-secondary'>{item.section3.s3t6}</p>
              </Col>

              <Col lg={5} md={5} sm={12} xs={12} className='bg-dark pt-4 ps-5 m-0'>
                <h1 className='text-warning fw-bold'>{item.section3.s3t3}</h1>
                <p className='text-light'>{item.section3.s3t4}</p>
                <p className='text-secondary'>{item.section3.s3t5}</p>
                <p className='text-secondary'>{item.section3.s3t6}</p>
              </Col>
            </Row>
            <Button className='rounded-pill fw-semibold mt-5' variant="warning">{item.section2.s2t17}</Button>

          </Container>






          <Container fluid className="sec1 pt-5 pb-5 m-0 bg-black d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-light text-center'>{item.section4.s4t1}</h1>
            <p className='text-secondary text-center mt-3'>{item.section4.s4t2}</p>

            <Row className="mt-3 p-0 gap-4 d-flex justify-content-center">
              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <p className='text-warning fs-1 text-center'><GiMagnifyingGlass /></p>
                <Card.Body>
                  <Card.Title className='text-light text-center'>{item.section4.s4t3}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <p className='text-warning fs-1 text-center'><GiMagnifyingGlass /></p>
                <Card.Body>
                  <Card.Title className='text-light text-center'>{item.section4.s4t3}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <p className='text-warning fs-1 text-center'><GiMagnifyingGlass /></p>
                <Card.Body>
                  <Card.Title className='text-light text-center'>{item.section4.s4t3}</Card.Title>
                </Card.Body>
              </Card>
            </Row>

            <Row className="mt-3 p-0 gap-4 d-flex justify-content-center">
              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <p className='text-warning fs-1 text-center'><GiMagnifyingGlass /></p>
                <Card.Body>
                  <Card.Title className='text-light text-center'>{item.section4.s4t3}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <p className='text-warning fs-1 text-center'><GiMagnifyingGlass /></p>
                <Card.Body>
                  <Card.Title className='text-light text-center'>{item.section4.s4t3}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <p className='text-warning fs-1 text-center'><GiMagnifyingGlass /></p>
                <Card.Body>
                  <Card.Title className='text-light text-center'>{item.section4.s4t3}</Card.Title>
                </Card.Body>
              </Card>
            </Row>

          </Container>


          <Container fluid className="sec1 pt-5 pb-5 m-0 bg-black d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-light text-center'>{item.section5.s5t1}</h1>
            <p className='text-secondary text-center mt-3'>{item.section5.s5t2}</p>

            <Row className="mt-3 w-100 p-0 d-flex justify-content-center">
              <Col lg={6} md={6} sm={12} xs={12} className=' m-0 pt-5 pb-5 ps-5 pe-5'>
                <div className='d-flex justify-content-between'>
                  <p className='text-light'>{item.section5.s5t3}</p>
                  <p className='text-light'>{item.section5.s5t4}</p>
                </div>
                <div className='w-100 hight rounded bg-secondary overflow-hidden'>
                  <div className='w-75 bg-warning rounded h-100'></div>
                </div>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='m-0 pt-5 pb-5 ps-5 pe-5'>
                <div className='d-flex justify-content-between'>
                  <p className='text-light'>{item.section5.s5t3}</p>
                  <p className='text-light'>{item.section5.s5t4}</p>
                </div>
                <div className='w-100 hight rounded bg-secondary overflow-hidden'>
                  <div className='w-75 bg-warning rounded h-100'></div>
                </div>
              </Col>
            </Row>


            <Row className="mt-3 w-100 p-0 d-flex justify-content-center">
              <Col lg={6} md={6} sm={12} xs={12} className='m-0 pt-5 pb-5 ps-5 pe-5'>
                <div className=' d-flex justify-content-between'>
                  <p className='text-light'>{item.section5.s5t3}</p>
                  <p className='text-light'>{item.section5.s5t4}</p>
                </div>
                <div className='w-100 hight rounded bg-secondary overflow-hidden'>
                  <div className='w-75 bg-warning rounded h-100'></div>
                </div>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className=' m-0 pt-5 pb-5 ps-5 pe-5'>
                <div className='d-flex justify-content-between'>
                  <p className='text-light'>{item.section5.s5t5}</p>
                  <p className='text-light'>{item.section5.s5t6}</p>
                </div>
                <div className='w-100 hight rounded bg-secondary overflow-hidden'>
                  <div className='w-75 bg-warning rounded h-100'></div>
                </div>
              </Col>
            </Row>

            <Row className="mt-3 w-100 p-0 d-flex justify-content-center">
              <Col lg={6} md={6} sm={12} xs={12} className=' m-0 pt-5 pb-5 ps-5 pe-5'>
                <div className='d-flex justify-content-between'>
                  <p className='text-light'>{item.section5.s5t7}</p>
                  <p className='text-light'>{item.section5.s5t8}</p>
                </div>
                <div className='w-100 hight rounded bg-secondary overflow-hidden'>
                  <div className='w-75 bg-warning rounded h-100'></div>
                </div>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className=' m-0 pt-5 pb-5 ps-5 pe-5'>
                <div className='d-flex justify-content-between'>
                  <p className='text-light'>{item.section5.s5t9}</p>
                  <p className='text-light'>{item.section5.s5t10}</p>
                </div>
                <div className='w-100 hight rounded bg-secondary overflow-hidden'>
                  <div className='w-75 bg-warning rounded h-100'></div>
                </div>
              </Col>
            </Row>

          </Container>


          <Container fluid className="sec1 pt-5 pb-5 m-0 bg-black d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-light text-center'>{item.section7.s7t1}</h1>
            <p className='text-secondary text-center mt-3'>{item.section7.s7t2}</p>

            <Row className="mt-3 w-100 p-0 d-flex justify-content-center">
              <Col lg={4} md={4} sm={12} xs={12} className='m-0 pt-5 pb-5 ps-5 pe-5'>
                <Card style={{ width: '18rem' , backgroundColor:"black" }}>
                  <Card.Img variant="top" src={item.section7.s7img1} />
                  <Card.Body>
                    <p className='text-warning'>{item.section7.s7t3}</p>
                    <Card.Title className='text-light'>{item.section7.s7t4}</Card.Title>
                    <Card.Text className='text-secondary'>{item.section7.s7t5}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={4} sm={12} xs={12} className='m-0 pt-5 pb-5 ps-5 pe-5'>
                <Card style={{ width: '18rem' , backgroundColor:"black" }}>
                  <Card.Img variant="top" src={item.section7.s7img2} />
                  <Card.Body>
                    <p className='text-warning'>{item.section7.s7t3}</p>
                    <Card.Title className='text-light'>{item.section7.s7t4}</Card.Title>
                    <Card.Text className='text-secondary'>{item.section7.s7t5}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={4} sm={12} xs={12} className='m-0 pt-5 pb-5 ps-5 pe-5'>
                <Card style={{ width: '18rem' , backgroundColor:"black" }}>
                  <Card.Img variant="top" src={item.section7.s7img3} />
                  <Card.Body>
                    <p className='text-warning'>{item.section7.s7t3}</p>
                    <Card.Title className='text-light'>{item.section7.s7t4}</Card.Title>
                    <Card.Text className='text-secondary'>{item.section7.s7t5}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container >



          <Container fluid className="sec1 p-0 m-0 bg-black">
            <Row className="m-0 p-0">

              <Col lg={3} md={3} sm={12} xs={12} className='ps-5 m-0 d-flex justify-content-center align-items-center'>
              <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrt1}</li>
                  <li className='text-secondary mt-4'>{item.Footer.ftrt2}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli1}</li>
                  <li className='text-secondary mt-4'>{item.Footer.ftrli2}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli3}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli4}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli5}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli6}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5 '>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli7}</li>
                  <li className='text-secondary mt-4'>{item.Footer.ftrli8}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli9}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli10}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli11}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli12}</li>

                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli13}</li>
                  <li className='text-secondary mt-4'>{item.Footer.ftrli14}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli15}</li>
                  <li className='text-secondary mt-2'>{item.Footer.ftrli16}</li>
                </ul>
              </Col>


            </Row>
          </Container>












        </>
      )
    })

    return (
      <>
        {content}
      </>
    )
  }
}


export default App;
