import React from 'react';
import {
    Card, Button, CardTitle, CardText, CardDeck,
    CardBody
} from 'reactstrap';

const Example = (props) => {
    return (
        <CardDeck>
            <Card style={{ border: "none" }}>
                <CardBody className="text-center">
                    <Button height="200"
                        className="rounded-circle px-5"></Button>
                    <CardTitle tag="h3" className="text-center">Heading</CardTitle>
                    <CardText className="text-center">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</CardText>
                    <Button className="text-center">View details >></Button>
                </CardBody>
            </Card>
            <Card style={{ border: "none" }}>

                <CardBody className="text-center">
                    <Button height="100"
                        className="rounded-circle px-5"></Button>
                    <CardTitle tag="h3" className="text-center">Heading</CardTitle>
                    <CardText className="text-center">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</CardText>
                    <Button className="text-center">View details >> </Button>
                </CardBody>
            </Card>
            <Card style={{ border: "none" }}>

                <CardBody className="text-center">
                    <Button height="100"
                        className="rounded-circle px-5"></Button>
                    <CardTitle tag="h3" className="text-center">Heading</CardTitle>
                    <CardText className="text-center">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</CardText>
                    <Button className="text-center">View details >></Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default Example;