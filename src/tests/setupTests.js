import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })