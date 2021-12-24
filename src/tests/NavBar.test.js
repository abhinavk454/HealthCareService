import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../pages/NavBar.jsx';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

configure({ adapter: new Adapter() });

describe("testing NavBar component", () => {
  let wrapper;
  const mockfn1 = jest.fn();

  test("checking the NavBar NavLink router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("Link").at(0);
    expect(signIn.props().to).toContain("/addPatient");

  });
  test("checking the NavBar allpatients router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("Link").at(1);
    expect(signIn.props().to).toContain("/allPatients");
  });
  test("checking the NavBar Book appointment router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("Link").at(2);
    expect(signIn.props().to).toContain("/bookAppointment");

  });

  test("checking the NavBar all appointments router content", () => {
    const wrapper = shallow(
      <NavBar
      />
    );
    const signIn = wrapper.find("Link").at(3);
    expect(signIn.props().to).toContain("/allAppointments");

  });
});