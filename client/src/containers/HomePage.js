import React from 'react';
import { Container } from 'semantic-ui-react';
import UserComponent from '../components/UserComponent';
import greeting from '../helpers/greeting';
import Navbar from '../components/NavbarComponent';

const HomePage = () => (
  (
    <div>
      <Navbar>
        <div>
          <h1>Home page</h1>
          <span>
            {
              greeting('Chris')
            }
            <UserComponent />
          </span>
        </div>
      </Navbar>
    </div>
  )
);

export default HomePage;
