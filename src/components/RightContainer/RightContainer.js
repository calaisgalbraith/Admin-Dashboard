import './RightContainer.css'
import DefaultContainer from './DefaultContainer/DefaultContainer';

function RightContainer({ selectedTab = 'Default'}) {
    let rightContainerHTML = ''
    switch (selectedTab) {
        case 'Default': // Default (no sidebar item selected, show welcome message)
            rightContainerHTML = <DefaultContainer />
    }
    return (
      <div className="rightContainer">
        {rightContainerHTML}
      </div>
    );
  }
  
  export default RightContainer;