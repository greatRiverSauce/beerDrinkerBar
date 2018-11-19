import React, {Component} from "react";
import {Row, Col, Panel} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {getSaleHighest, getLikeHighest} from "./Action/manufacturer";
import connect from "react-redux/es/connect/connect";
import {Bar, CartesianGrid, ComposedChart, Legend, Tooltip, XAxis, YAxis} from "recharts";

class ManufacturerPage extends Component {

    componentDidMount() {
        const { manufacturerName } = this.props.match.params;
        this.props.getSaleHighest(manufacturerName);
        this.props.getLikeHighest(manufacturerName);
    };

    renderRegions = () =>{
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Top 10 Regions with highest sales in last week</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <ComposedChart layout="vertical" width={450} height={450} data={this.props.regionsSaleHighest.slice(0,10)}
                                               margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                                    <CartesianGrid stroke='#f5f5f5'/>
                                    <XAxis type="number"/>
                                    <YAxis dataKey="location" type="category"/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
                                </ComposedChart>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Top 10 Regions with highest Likes in last week</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <ComposedChart layout="vertical" width={450} height={450} data={this.props.regionsLikeHighest.slice(0,10)}
                                               margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                                    <CartesianGrid stroke='#f5f5f5'/>
                                    <XAxis type="number"/>
                                    <YAxis dataKey="hometown" type="category"/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
                                </ComposedChart>
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
                <Col md={10} mdOffset={1}>
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

