import './AboutContainer.css'
import { FaPaw } from "react-icons/fa6";

function AboutContainer() {
  return (
    <div id="aboutContainer" className='container'>
      <div className='row' id="shelterInfo">
        <div className='col'>
        <div className="card">
          <div className="card-body container">
            <div className='row'>
              <div className='col'>
                <div><FaPaw /></div>
                <div className='shelterName'>Paws Shelter</div>
              </div>
              <div className='col'>
                <div>1110 Animal Way <br/> Eugene, OR 94701</div>
                <div>Phone: 555-555-1909</div>
                <div>Email: pawsShelter@pawsShelter.org</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <div className='row' id="usefulInfo">
        <div className='col'>
          <div class="card">
            <div class="card-header">
              <h3>Hours</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Monday: 9:00am-6:00pm</li>
                <li class="list-group-item">Tuesday: 9:00am-6:00pm</li>
                <li class="list-group-item">Wednesday: 9:00am-6:00pm</li>
                <li class="list-group-item">Thursday: 9:00am-6:00pm</li>
                <li class="list-group-item">Friday: 9:00am-6:00pm</li>
                <li class="list-group-item">Saturday: 9:00am-4:00pm</li>
                <li class="list-group-item">Sunday: 10:30am-4:00pm</li>
            </ul>
          </div>
        </div>

        <div className='col'>
          <div class="card">
            <div class="card-header">
              <h3>Important Information</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Catery: *678</li>
              <li class="list-group-item">Dogs: *980</li>
              <li class="list-group-item">Front desk: *117</li>
              <li class="list-group-item">Supervisor: 555-555-1919</li>
              <li class="list-group-item">Paws Hospital: 555-555-0125</li>
              <li class="list-group-item">Emergency Vet: 555-555-0122</li>
              <li class="list-group-item">ASPCA Animal Poison Control Center: 888-426-4435</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutContainer;