import React from 'react';
import SocialButton from './SocialButton';
import IconBar from './IconBar';

function App() {
  // const [icons, setIconsState] = React.useState([
  //   {name: home, active: false},
  //   {name: search, active: false},
  //   {name: envelope, active: false},
  //   {name: globe, active: false},
  //   {name: trash, active: false}
  // ])

  return (
    <React.Fragment>
      <SocialButton type="facebook"/>
      <SocialButton type="twitter" />
      <IconBar />
    </React.Fragment>
    
  );
}

export default App;
