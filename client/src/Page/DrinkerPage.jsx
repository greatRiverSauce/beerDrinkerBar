import React, {Component} from "react";
import {
    ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import {Row, Col, Panel, Tab, Tabs} from "react-bootstrap";
import { connect }                                    from 'react-redux';
import { bindActionCreators }                         from 'redux';

import {getDrinkers, setCurDrinkers, getBeers, getTransactions, getSpending} from "./../Action/drinker";

class DrinkerPage extends Component {

    state ={
        month: "jan",
    }

    componentDidMount() {
        const { drinkerName } = this.props.match.params;
        this.props.getBeers(drinkerName);

        for (let i = 1; i <= 12; i++) {
            this.props.getSpending(drinkerName, i);
            this.props.getTransactions(drinkerName, i);
        }
    };

    renderMonthlySpending = (data) => (
        <Col md={6}>
            <ComposedChart layout="vertical" width={600} height={450} data={data}
                           margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis type="number"/>
                <YAxis dataKey="bar" type="category"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
            </ComposedChart>
        </Col>
    );

    renderMonthlyTransctions = (data) => (
        <Col md={6}>
            <ComposedChart layout="vertical" width={600} height={450} data={data}
                           margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis type="number"/>
                <YAxis dataKey="bar" type="category"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
            </ComposedChart>
        </Col>
    );

    render() {
        const {
            jan, feb, mar, apl, may, jun, jul, aug, sep, oct, nov, dec,
            janTransactions, febTransactions, marTransactions, aplTransactions, mayTransactions, junTransactions, julTransactions, augTransactions, sepTransactions, octTransactions, novTransactions, decTransactions
        } = this.props;
        return (
            <Row>
                <Col md={10} mdOffset={1}>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">
                                        Monthly Spends in Different Bars
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                        <Tab eventKey={1} title="Jan">
                                            {this.renderMonthlySpending(jan)}
                                        </Tab>
                                        <Tab eventKey={2} title="Feb">
                                            {this.renderMonthlySpending(feb)}
                                        </Tab>
                                        <Tab eventKey={3} title="Mar">
                                            {this.renderMonthlySpending(mar)}
                                        </Tab>
                                        <Tab eventKey={4} title="Apl">
                                            {this.renderMonthlySpending(apl)}
                                        </Tab>
                                        <Tab eventKey={5} title="May">
                                            {this.renderMonthlySpending(may)}
                                        </Tab>
                                        <Tab eventKey={6} title="Jun">
                                            {this.renderMonthlySpending(jun)}
                                        </Tab>
                                        <Tab eventKey={7} title="Jul">
                                            {this.renderMonthlySpending(jul)}
                                        </Tab>
                                        <Tab eventKey={8} title="Aug">
                                            {this.renderMonthlySpending(aug)}
                                        </Tab>
                                        <Tab eventKey={9} title="Sep">
                                            {this.renderMonthlySpending(sep)}
                                        </Tab>
                                        <Tab eventKey={10} title="Oct">
                                            {this.renderMonthlySpending(oct)}
                                        </Tab>
                                        <Tab eventKey={11} title="Nov">
                                            {this.renderMonthlySpending(nov)}
                                        </Tab>
                                        <Tab eventKey={12} title="Dec">
                                            {this.renderMonthlySpending(dec)}
                                        </Tab>
                                    </Tabs>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">
                                        Monthly Transactions in Different Bars
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                        <Tab eventKey={1} title="Jan">
                                            {this.renderMonthlyTransctions(janTransactions)}
                                        </Tab>
                                        <Tab eventKey={2} title="Feb">
                                            {this.renderMonthlyTransctions(febTransactions)}
                                        </Tab>
                                        <Tab eventKey={3} title="Mar">
                                            {this.renderMonthlyTransctions(marTransactions)}
                                        </Tab>
                                        <Tab eventKey={4} title="Apl">
                                            {this.renderMonthlyTransctions(aplTransactions)}
                                        </Tab>
                                        <Tab eventKey={5} title="May">
                                            {this.renderMonthlyTransctions(mayTransactions)}
                                        </Tab>
                                        <Tab eventKey={6} title="Jun">
                                            {this.renderMonthlyTransctions(junTransactions)}
                                        </Tab>
                                        <Tab eventKey={7} title="Jul">
                                            {this.renderMonthlyTransctions(julTransactions)}
                                        </Tab>
                                        <Tab eventKey={8} title="Aug">
                                            {this.renderMonthlyTransctions(augTransactions)}
                                        </Tab>
                                        <Tab eventKey={9} title="Sep">
                                            {this.renderMonthlyTransctions(sepTransactions)}
                                        </Tab>
                                        <Tab eventKey={10} title="Oct">
                                            {this.renderMonthlyTransctions(octTransactions)}
                                        </Tab>
                                        <Tab eventKey={11} title="Nov">
                                            {this.renderMonthlyTransctions(novTransactions)}
                                        </Tab>
                                        <Tab eventKey={12} title="Dec">
                                            {this.renderMonthlyTransctions(decTransactions)}
                                        </Tab>
                                    </Tabs>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Top 10 Beers ordered the most</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <ComposedChart layout="vertical" width={500} height={600} data={this.props.beers.slice(0, 10)}
                                                   margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                                        <CartesianGrid stroke='#f5f5f5'/>
                                        <XAxis type="number"/>
                                        <YAxis dataKey="item" type="category"/>
                                        <Tooltip/>
                                        <Legend/>
                                        <Bar dataKey='amount' barSize={20} fill='#413ea0'/>
                                    </ComposedChart>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );

    }
}

const mapStateToProps = (state) => ({
    drinkers : state.drinker.drinkers,
    curDrinker : state.drinker.curDrinker,
    transactions: state.drinker.transactions,
    beers: state.drinker.beers,
    jan: state.drinker.spending["jan"],
    feb: state.drinker.spending["feb"],
    mar: state.drinker.spending["mar"],
    apl: state.drinker.spending["apl"],
    may: state.drinker.spending["may"],
    jun: state.drinker.spending["jun"],
    jul: state.drinker.spending["jul"],
    aug: state.drinker.spending["aug"],
    sep: state.drinker.spending["sep"],
    oct: state.drinker.spending["oct"],
    nov: state.drinker.spending["nov"],
    dec: state.drinker.spending["dec"],

    janTransactions: state.drinker.transactions["jan"],
    febTransactions: state.drinker.transactions["feb"],
    marTransactions: state.drinker.transactions["mar"],
    aplTransactions: state.drinker.transactions["apl"],
    mayTransactions: state.drinker.transactions["may"],
    junTransactions: state.drinker.transactions["jun"],
    julTransactions: state.drinker.transactions["jul"],
    augTransactions: state.drinker.transactions["aug"],
    sepTransactions: state.drinker.transactions["sep"],
    octTransactions: state.drinker.transactions["oct"],
    novTransactions: state.drinker.transactions["nov"],
    decTransactions: state.drinker.transactions["dec"],
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getDrinkers,
    setCurDrinkers,
    getBeers,
    getTransactions,
    getSpending,
}, dispatch);

const DrinkerPageComponent = connect(mapStateToProps, mapDispatchToProps)(DrinkerPage);

export default DrinkerPageComponent;

