// import logo from './logo.svg';
// import './App.css';
// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Carousel} from 'react-bootstrap'
import {Accordion,Row,Col} from 'react-bootstrap'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// mdb
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Guidelines.css';
import 'react-bootstrap';

// import {Stats} from './Stats2';
import { Card, CardGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function Guidelines(){
    return(
        <div id="guidelined">
<Carousel variant="dark" fade>
  <Carousel.Item>
    <img className="d-block w-100" src="https://images.unsplash.com/photo-1608451643043-6a8eebc527ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="First slide"/>
    <Carousel.Caption>
      <h1>Stay Home Stay Safe</h1>
      <p>Stay physically fit. Exercise regulary. Eat a nutritious diet. Don’t smoke.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/washing-hands-picture-id467706864?b=1&k=20&m=467706864&s=170667a&w=0&h=X0-HajhB2N7Nj-jqaLd83Aw81WYG8Z8fQK6JLCqjKrI="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Always wear a mask.</h1>
      <p>Follow the Golden Rule. Wash your hands frequently with soap and water or use alchohol based hand-rub.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1612246964377-048f2f1e76d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvdmlkfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Save your community, </h1>
      <p>If you show symptoms of COVID-19, self isolate yourself, wear a mask around others and seek medical advice.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>
<h1 ><strong>Guidelines and Protocols</strong></h1>
<br/>

<Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Make your environment safer</Accordion.Header>
    <Accordion.Body>
    The risks of getting COVID-19 are higher in crowded and inadequately ventilated spaces where infected people spend long periods of time together in close proximity.

Outbreaks have been reported in places where people have gather, often in crowded indoor settings and where they talk loudly, shout, breathe heavily or sing such as restaurants, choir practices, fitness classes, nightclubs, offices and places of worship.

To make your environment as safe as possible:

Avoid the 3Cs: spaces that are closed, crowded or involve close contact.
Meet people outside. Outdoor gatherings are safer than indoor ones, particularly if indoor spaces are small and without outdoor air coming in.
If you can’t avoid crowded or indoor settings, take these precautions:
Open a window to increase the amount of natural ventilation when indoors.
Wear a mask (see above for more details).
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Keep good hygiene</Accordion.Header>
    <Accordion.Body>
    By following good respiratory hygiene you protect the people around you from viruses that cause colds, flu and COVID-19. 

To ensure good hygiene you should:

Regularly and thoroughly clean your hands with either an alcohol-based hand rub or soap and water. This eliminates germs that may be on your hands, including viruses.
Cover your mouth and nose with your bent elbow or a tissue when you cough or sneeze. Dispose of the used tissue immediately into a closed bin and wash your hands.
Clean and disinfect surfaces frequently, especially those which are regularly touched, such as door handles, faucets and phone screens.
 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>What to do if you feel unwell</Accordion.Header>
    <Accordion.Body>
    If you feel unwell, here’s what to do. 

If you have a fever, cough and difficulty breathing, seek medical attention immediately. Call by telephone first and follow the directions of your local health authority.
Know the full range of symptoms of COVID-19. The most common symptoms of COVID-19 are fever, dry cough, tiredness and loss of taste or smell. Less common symptoms include aches and pains, headache, sore throat, red or irritated eyes, diarrhoea,  a skin rash or discolouration of fingers or toes.
Stay home and self-isolate for 10 days from symptom onset, plus three days after symptoms cease. Call your health care provider or hotline for advice. Have someone bring you supplies. If you need to leave your house or have someone near you, wear a properly fitted mask to avoid infecting others.
Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Local and national authorities and public health units are best placed to advise on what people in your area should be doing to protect themselves.
 
 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header>Strategy and planning</Accordion.Header>
    <Accordion.Body>
    WHO is issuing the COVID-19 Strategic Preparedness and Response Plan (SPRP) for 2021 and accompanying documents as a package  aimed at guiding the coordinated action that we must take at national, regional, and global levels to overcome the ongoing challenges in the response to COVID-19, address inequities, and plot a course out of the pandemic.

Over the past year, much has been achieved by national authorities and communities with the support of WHO, donors and partners, and an unprecedented effort by the scientific community and the private sector.

The Strategic Preparedness and Response Plan 2021 (SPRP2021) builds on what we have learned about the virus and our collective response over the course of 2020, and translates that knowledge into strategic actions. This plan builds on achievements and also focuses on the new challenges, to mitigate, for example, risks related to new variants. The plan also considers the road we need to travel towards the safe, equitable and effective delivery of diagnostics and vaccines as part of the overall strategy to successfully tackle the COVID-19 pandemic 
 
 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<h1><strong> World Health Organisation says......</strong></h1>
<Col className="m-auto">
  <img
    className="d-block mx-auto img-fluid w-100"
    src={"https://www.who.int/images/default-source/wpro/countries/malaysia/infographics/mask/clothing-masks-infographic--web---part-1.png?sfvrsn=53fc824f_2"}
    alt="mysvg"
  ></img>
</Col>
{/* <img id="poster" className="" src="https://www.who.int/images/default-source/wpro/countries/malaysia/infographics/mask/clothing-masks-infographic--web---part-1.png?sfvrsn=53fc824f_2"style={{width:"80%" , margin:"10px auto"}} >

</img> */}

</div>
    );
}
export default Guidelines;
