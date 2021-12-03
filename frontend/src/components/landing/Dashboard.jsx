import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Details from "./Details";
import CommunityForm from "../CommunityForm/RescForm"
import axios from "axios";
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: "Community",
      data:[]
    };
  }

  

  handleNavChange = (nav) => {
    if(nav!="Community"){
    axios.get("http://localhost:3000/api/v1/resources/"+nav)
    .then(res=>{
    this.setState({ 
      selectedNav: nav ,
      data: res.data.resources
    })}).catch(err=> console.log(err))
    }else{
      this.setState({selectedNav:nav})
    }
  };

  componentDidMount() {
  }

  detailsList(){
    return 
  }

  render() {
    return (
      <div className="dashboard-container" >
      
        <Container fluid >
          <Row>
            <Col sm={12} md={3} lg={3}>
              <div className="vertical-navigation" style={{backgroundColor:'#000',height:"100%"}}>
                <Nav
                  variant="pills"
                  className="flex-column"
                  defaultActiveKey="All"
                  onSelect={this.handleNavChange}
                >
                  <Nav.Link eventKey="Community">Community</Nav.Link>
                  <Nav.Link eventKey="Oxygen">Oxygen</Nav.Link>
                  <Nav.Link eventKey="Plasma">Plasma </Nav.Link>
                  <Nav.Link eventKey="Medicine">Medicine</Nav.Link>
                  <Nav.Link eventKey="Beds">Beds</Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col sm={12} md={9} lg={9}>
              <div className="component-rendered">
               
                { 
        (this.state.selectedNav === 'Oxygen')
        
                    ? <div>
                      
                     Oxygen
                                  
                    </div>
                    : this.state.selectedNav === 'Medicine' ? <div>Medicine</div>
                    : this.state.selectedNav === 'Beds' ? <div>Beds</div>
                    : this.state.selectedNav === 'Community' ? <CommunityForm/>
                    : this.state.selectedNav === 'Plasma' ? <div>Plasma</div>
                    :<div>All</div>

      }
              </div>
              <div>
              {this.state.selectedNav==='Community'?"":

              this.state.data[0].map((res)=>{
                return(
                  <Details
                                title={res.title}
                                info={res.description}
                                verified={res.verificationData}
                                phoneno={res.contact}
                                likes={res.likes}
                                key={res._id} />
                )
              })
              
              }

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
