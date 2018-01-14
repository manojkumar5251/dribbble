import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<img
								style={{paddingLeft:'35%'}}
								alt="dribbble"
								src="https://cdn.dribbble.com/assets/logo-small-4612353cefa78dfe35ba5e8e9d35da9f9305a3a516ef9675b5c37004c5862b6d.png"
							/>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<input
								placeholder="search"
								className="form-control visible-xs input"
							/>
							<NavDropdown eventKey={3} title="Shots" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
							<NavDropdown
								eventKey={3}
								title="Designers"
								id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3} title="Blog" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3} title="Podpost" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3} title="Meetups" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3} title="Jobs" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3} title="Hiring" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3} title="..." id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
						</Nav>
						<Nav pullRight>
							<NavItem eventKey={1} href="#">
								Sign in
							</NavItem>
							<NavItem eventKey={2} href="#">
								Sign up
							</NavItem>
							<input
								type="text"
								placeholder="search"
								className="input hidden-xs "
							/>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
