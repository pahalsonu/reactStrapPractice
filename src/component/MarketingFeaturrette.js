import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Card class="row featurette"> 
                <CardBody class="col-md-7">
                    <CardTitle tag="h5">First featurette heading. It'll blow your mind.</CardTitle>
                    <CardText>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</CardText>
                </CardBody>
                <CardImg class="col-md-5" top width="100%"  src="./joker.jpg" alt="Card image cap" />

            </Card>
            
            <Card class="row featurette"> 
                <CardBody class="col-md-7 order-md-2">
                    <CardTitle tag="h5">First featurette heading. It'll blow your mind.</CardTitle>
                    <CardText>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</CardText>
                </CardBody>
                <CardImg class="col-md-5 order-md-1" top width="100%"  src="/assets/318x180.svg" alt="Card image cap" />

            </Card>
        </div>
    );
};

export default Example;