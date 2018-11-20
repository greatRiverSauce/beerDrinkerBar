import React, {Component} from "react";
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import {Row, Col, Panel, Tabs, Tab} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {getSpenders, getBrands, getBars} from "../Action/bar";
import {connect} from "react-redux";

import Select from 'react-select';



class BarPage extends Component {
    state = {
        beer: "Guinness",
    };

    componentDidMount () {
        const { barName } = this.props.match.params;
        this.props.getSpenders(barName);
        this.props.getBrands("Monday", barName);
        this.props.getBrands("Tuesday", barName);
        this.props.getBrands("Wednesday", barName);
        this.props.getBrands("Thursday", barName);
        this.props.getBrands("Friday", barName);
        this.props.getBrands("Saturday", barName);
        this.props.getBrands("Sunday", barName);

        this.props.getBars("Monday", this.state.beer);
        this.props.getBars("Tuesday", this.state.beer);
        this.props.getBars("Wednesday", this.state.beer);
        this.props.getBars("Thursday", this.state.beer);
        this.props.getBars("Friday", this.state.beer);
        this.props.getBars("Saturday", this.state.beer);
        this.props.getBars("Sunday", this.state.beer);
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.beer !== this.state.beer) {
            this.props.getBars("Monday", this.state.beer);
            this.props.getBars("Tuesday", this.state.beer);
            this.props.getBars("Wednesday", this.state.beer);
            this.props.getBars("Thursday", this.state.beer);
            this.props.getBars("Friday", this.state.beer);
            this.props.getBars("Saturday", this.state.beer);
            this.props.getBars("Sunday", this.state.beer);
        }
    }

    renderDaily = (data) => {
        return (
            <ComposedChart layout="vertical" width={600} height={450} data={data}
                           margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis type="number"/>
                <YAxis dataKey="name" type="category"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='Sales' barSize={20} fill='#413ea0'/>
            </ComposedChart>
        );
    }

    renderDailyBar = (data) => {
        return (
            <ComposedChart layout="vertical" width={600} height={500} data={data}
                           margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis type="number"/>
                <YAxis dataKey="bar" type="category"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='Sales' barSize={20} fill='#413ea0'/>
            </ComposedChart>
        );
    }
    renderChart = () => {
        const {
            mon, tue, wed, thu, fri, sat, sun,
            monBar, tueBar, wedBar, thuBar, friBar, satBar, sunBar,
        } = this.props;

        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Top 10 Largest Spenders</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ComposedChart layout="vertical" width={600} height={400} data={this.props.spenders}
                                       margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <CartesianGrid stroke='#f5f5f5'/>
                            <XAxis type="number"/>
                            <YAxis dataKey="buyer" type="category"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='Total' barSize={20} fill='#413ea0'/>
                        </ComposedChart>
                    </Panel.Body>
                </Panel>

                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Daily Top 10 beer brands
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Mon">
                                {this.renderDaily(mon)}
                            </Tab>
                            <Tab eventKey={2} title="Tue">
                                {this.renderDaily(tue)}
                            </Tab>
                            <Tab eventKey={3} title="Wed">
                                {this.renderDaily(wed)}
                            </Tab>
                            <Tab eventKey={4} title="Thu">
                                {this.renderDaily(thu)}
                            </Tab>
                            <Tab eventKey={5} title="Fri">
                                {this.renderDaily(fri)}
                            </Tab>
                            <Tab eventKey={6} title="Sat">
                                {this.renderDaily(sat)}
                            </Tab>
                            <Tab eventKey={7} title="Sun">
                                {this.renderDaily(sun)}
                            </Tab>
                        </Tabs>
                    </Panel.Body>
                </Panel>

                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Daily Top 10 bars sale best
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Select
                            defaultValue={{label: "Guinness", value: "Guinness"}}
                            onChange={(e) => this.setState({beer: e.value})}
                            options={[
                                {label: "Guinness", value: "Guinness"},
                                {label: "Icehouse", value: "Icehouse"},
                                {label: "Heineken", value: "Heineken"},
                                {label: "Busch",    value: "Busch"},
                                {label: "Budweiser",value: "Budweiser"},
                            ]}
                        />
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Mon">
                                {this.renderDailyBar(monBar)}
                            </Tab>
                            <Tab eventKey={2} title="Tue">
                                {this.renderDailyBar(tueBar)}
                            </Tab>
                            <Tab eventKey={3} title="Wed">
                                {this.renderDailyBar(wedBar)}
                            </Tab>
                            <Tab eventKey={4} title="Thu">
                                {this.renderDailyBar(thuBar)}
                            </Tab>
                            <Tab eventKey={5} title="Fri">
                                {this.renderDailyBar(friBar)}
                            </Tab>
                            <Tab eventKey={6} title="Sat">
                                {this.renderDailyBar(satBar)}
                            </Tab>
                            <Tab eventKey={7} title="Sun">
                                {this.renderDailyBar(sunBar)}
                            </Tab>
                        </Tabs>
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
    spenders : state.bar.spenders,
    mon: state.bar.brands["mon"],
    tue: state.bar.brands["tue"],
    wed: state.bar.brands["wed"],
    thu: state.bar.brands["thu"],
    fri: state.bar.brands["fri"],
    sat: state.bar.brands["sat"],
    sun: state.bar.brands["sun"],
    monBar: state.bar.bars["mon"],
    tueBar: state.bar.bars["tue"],
    wedBar: state.bar.bars["wed"],
    thuBar: state.bar.bars["thu"],
    friBar: state.bar.bars["fri"],
    satBar: state.bar.bars["sat"],
    sunBar: state.bar.bars["sun"],
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getSpenders,
    getBrands,
    getBars
}, dispatch);

const BarPageComponent = connect(mapStateToProps, mapDispatchToProps)(BarPage);

export default BarPageComponent;
