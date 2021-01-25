import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink

} from 'reactstrap';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Carousel</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Link">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink disabled href="/Link">Disabled</NavLink>
                        </NavItem>
                    </Nav>
                    <Form>
                        <FormGroup>
                            <Input type="text" name="Search" id="Search" placeholder="Search" />
                        </FormGroup>
                    </Form>
                    <Button outline color="success" >Search</Button>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;



