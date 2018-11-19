import React, {Component} from "react";
import {Row, Col, Panel, ListGroup, ListGroupItem} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {getSaleHighest, getLikeHighest} from "./Action/manufacturer";
import connect from "react-redux/es/connect/connect";

class ManufacturerPage extends Component {

    componentDidMount() {
        const { manufacturerName } = this.props.match.params;
        console.log(manufacturerName);
        //this.props.getSaleHighest();
        //this.props.getLikeHighest();
    };

    renderRegions = () =>{
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Regions with highest sales in last week</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <ListGroup>
                                    {
                                        this.props.regionsSaleHighest && this.props.regionsSaleHighest.map(region =>
                                            <ListGroupItem
                                                key={region}
                                                href="#"
                                            >{region}</ListGroupItem>
                                        )
                                    }
                                </ListGroup>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Regions with highest Likes in last week</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <ListGroup>
                                    {
                                        this.props.regionsLikeHighest && this.props.regionsLikeHighest.map(region =>
                                            <ListGroupItem
                                                key={region}
                                                href="#"
                                            >{region}</ListGroupItem>
                                        )
                                    }
                                </ListGroup>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    };

    render() {
        return (
            <Row>
                <Col md={8} mdOffset={2}>
                    {this.renderRegions()}
                </Col>
            </Row>
        );

    }
}
const mapStateToProps = (state) => ({
    regionsSaleHighest : state.manufacturer.regionsSaleHighest,
    regionsLikeHighest : state.manufacturer.regionsLikeHighest,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getSaleHighest,
    getLikeHighest,
}, dispatch);

const ManufacturerPageComponent = connect(mapStateToProps, mapDispatchToProps)(ManufacturerPage);

export default ManufacturerPageComponent;

