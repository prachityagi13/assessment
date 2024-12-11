import React from 'react';
import '../LeadDetails/LeadDetails.css'
import { CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faUserPlus, faSquareMinus, faArrowRotateRight, faCheck } from "@fortawesome/free-solid-svg-icons";

const LeadDetails = () => {
  return (
    <>
    <section className="lead-details">
      <div className="header">
        <h2>LE-010071</h2>
        <div style={{ display: "flex", gap: "1rem", fontSize: "1rem", color: "#aaa", justifyContent:"end" }}>
      <FontAwesomeIcon icon={faSquarePlus} />
      <FontAwesomeIcon icon={faUserPlus} />
      <FontAwesomeIcon icon={faSquareMinus} />
      <FontAwesomeIcon icon={faArrowRotateRight} />
    </div>
      </div>
      <div className='btns'>
      <button color="primary" className="custom-button">New</button>
      <button color="primary" className="custom-button">Contacted</button>
      <button color="primary" className="custom-button">Nurturing</button>
      <button color="primary" className="custom-button">Qualified</button>
      <button color="primary" className="custom-button">Unqualified</button>
      
      <div className="mark-converted">
      <button className="mark-button"><FontAwesomeIcon style={{marginRight:"10px"}} icon={faCheck}/>Mark as converted</button>
      </div>
      {/* className detail-tabs */}
        
      </div>
    </section>
    <div className='box'>
    <section>
      <div className="box1">
        <h3>Mamta Naik</h3>
      </div>
    <div className="details-tabs">
      <button>Basic Details</button>
      <button>Account Details</button>
      <button>Lead Details</button>
      <button>Team</button>
      <button>Other Contacts</button>
    </div>
    </section>
    <section className="activity-panel">
      <h3>Activity</h3>
      <form>
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
    <div className="history-panel">
      <h3>Stage History</h3>
      <ul>
        <li>28/08 - Created Jiya Gopal</li>
        <li>28/08 - Assigned to Aniruddh Naidu</li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default LeadDetails;
