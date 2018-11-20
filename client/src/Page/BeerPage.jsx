import React, {Component} from "react";
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import {Row, Col, Panel} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {getDrinkers, getBars, getTimes} from "../Action/beer";
import {connect} from "react-redux";

class BeerPage extends Component {
    componentDidMount () {
        const { beerName } = this.props.match.params;
        this.props.getDrinkers(beerName);
        this.props.getBars(beerName);
        this.props.getTimes(beerName);
    }
    renderChart = () => {
        const data = [
            {name: 'Page A', uv: 590, pv: 800, amt: 1400},
            {name: 'Page B', uv: 868, pv: 967, amt: 1506},
            {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
            {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
            {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
            {name: 'Page F', uv: 1400, pv: 680, amt: 1700},
            {name: 'Page F', uv: 1400, pv: 680, amt: 1700},
            {name: 'Page F', uv: 1400, pv: 680, amt: 1700},
            {name: 'Page F', uv: 1400, pv: 680, amt: 1700},
            {name: 'Page F', uv: 1400, pv: 680, amt: 1700},
        ];

        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Top 10 Bars Sells The Most</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ComposedChart layout="vertical" width={600} height={400} data={this.props.bars}
                                       margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <CartesianGrid stroke='#f5f5f5'/>
                            <XAxis type="number"/>
                            <YAxis dataKey="bar" type="category"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
                        </ComposedChart>
                    </Panel.Body>
                </Panel>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">The Biggest Consumers.</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ComposedChart layout="vertical" width={600} height={500} data={this.props.drinkers.slice(0, 10)}
                                       margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <CartesianGrid stroke='#f5f5f5'/>
                            <XAxis type="number"/>
                            <YAxis dataKey="buyer" type="category"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
                        </ComposedChart>
                    </Panel.Body>
                </Panel>

                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Time distribution Sells The Most.</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ComposedChart layout="vertical" width={600} height={400} data={this.props.times}
                                       margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <CartesianGrid stroke='#f5f5f5'/>
                            <XAxis type="number"/>
                            <YAxis dataKey="month" type="category"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
                        </ComposedChart>
                    </Panel.Body>
                </Panel>
            </div>

        );
    };

    render() {

        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    {this.renderChart()}
                </Col>
            </Row>
        );

    }
}
const mapStateToProps = (state) => ({
    drinkers : state.beer.drinkers,
    bars: state.beer.bars,
    times: state.beer.times,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getDrinkers,
    getBars,
    getTimes
}, dispatch);

const BeerPageComponent = connect(mapStateToProps, mapDispatchToProps)(BeerPage);

export default BeerPageComponent;
