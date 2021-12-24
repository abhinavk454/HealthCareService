import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import { HashRouter as Router } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<SignUpForm />));

  it('should render eleven <div />', () => {
    expect(wrapper.find('div').length).toEqual(10);
  });



  it('should render six <label>s', () => {
    expect(wrapper.find('label')).toHaveLength(5);
  });
  it('should render six <input>s', () => {
    expect(wrapper.find('input')).toHaveLength(5);
  });
  it('renders a uname input', () => {
    expect(shallow(<SignUpForm />).find('#uname').length).toEqual(1)
  });
  it('renders a email input', () => {
    expect(shallow(<SignUpForm />).find('#email').length).toEqual(1)
  });
  it('renders a password input', () => {
    expect(shallow(<SignUpForm />).find('#password').length).toEqual(1)
  });
  // it('renders a dob input', () => {
  //   expect(shallow(<SignUpForm />).find('#dob').length).toEqual(1)
  // });
  it('renders a mobileno input',() => {
    expect(shallow(<SignUpForm />).find('#mobileno').length).toEqual(1)
  });
  it('renders a location input',() => {
    expect(shallow(<SignUpForm />).find('#location').length).toEqual(1)
  })
  it('should change the name state of login component',() => {
    wrapper.find('#uname').simulate('change', {target: {name: 'uname',value:'Alex'}});
    expect(wrapper.state('uname')).toEqual('Alex');
  })
  it('should change the email state of login component',() => {
    wrapper.find('#email').simulate('change',{target: {name: 'email',value:'alex@gmail.com'}});
    expect(wrapper.state('email')).toEqual('alex@gmail.com');
  })
  it('should change the password state of login component',() => {
    wrapper.find('#password').simulate('change',{target: {name: 'password',value:'12345678'}});
    expect(wrapper.state('password')).toEqual('12345678');
  })
  // it('should change the dob state of login component',() => {
  //   wrapper.find('#dob').simulate('change',{target: {name: 'dob',value:'26/5/1996'}});
  //   expect(wrapper.state('dob')).toEqual('26/5/1996');
  // })
  it('should change the mobileno state of login component',() => {
    wrapper.find('#mobileno').simulate('change',{target: {name: 'mobileno',value:'8789879878'}});
    expect(wrapper.state('mobileno')).toEqual('8789879878');
  })
  it('should change the location state of login component',() => {
    wrapper.find('#location').simulate('change',{target: {name: 'location',value:'Chennai'}});
    expect(wrapper.state('location')).toEqual('Chennai');
  })

  it('valid path', () => {
    const wrapper = mount(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );
    expect(wrapper.find(SignUpForm)).toHaveLength(1);
  });
})




