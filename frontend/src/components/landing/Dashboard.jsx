import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Details from "./Details";
import CommunityForm from "../CommunityForm/RescForm"
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: "All"
    };
  }

  componentDidMount() {}

  handleNavChange = (nav) => {
    this.setState({ selectedNav: nav });
  };

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
                  <Nav.Link eventKey="Community">
                   Community
                  </Nav.Link>
                  <Nav.Link eventKey="Oxygen">Oxygen</Nav.Link>
                  <Nav.Link eventKey="Plasma">
                    Plasma
                  </Nav.Link>
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
                      <Details
                      title="Roche's Antibody Cocktail Available"
                      info="Alongwith AMPHOTERICIN B, TOCILIZUMAB, REMDESIVIR and all other COVID equipment and medicines available. Email ID- ravi.ravispecialitiespharma@gmail.com"
                      verified="Verified at 27/05/2021 12:45 PM"
                      phoneno="9994330921"
                        likes="4" />
                      <Details
                      title="Oxygen Beds Available"
                      info="At Atmakur Hospital, Nellore."
                      verified="Verified at 23/05/2021 12:55 PM"
                      phoneno="8985501725"
                        likes="7" />
                      <Details
                      title="Oxygen and ICU Beds Available"
                      info="At Lifeline Medicure Hospital, Secunderabad."
                      verified="Verified at 27/05/2021 12:45 PM"
                      phoneno="9994330921"
                      likes="4"/>
                    
                    
                    
                    </div>
                    : this.state.selectedNav === 'Medicine' ? <div>Medicine</div>
                    : this.state.selectedNav === 'Beds' ? <div>Beds</div>
                    : this.state.selectedNav === 'Community' ? <CommunityForm/>
                    : this.state.selectedNav === 'Plasma' ? <div>Plasma</div>
                    :<div>All</div>
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
