import React, {Component} from "react";
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import {Row, Col, Panel, DropdownButton, MenuItem, Table} from "react-bootstrap";
import {getTransactions, getRankings} from '../Action/bartender';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Select from 'react-select';


class BartenderPage extends Component {
    state={
        bartenderName: "Gunner Coleman",
        barName: "Yahooz Bar & Char",
        barNameRank: "Yahooz Bar & Char",
        shiftName: "Night",
        day: "Monday",

    }
    componentDidMount () {
        this.props.getTransactions(this.state.barName, this.state.bartenderName);
        this.props.getRankings(this.state.barNameRank, this.state.shiftName, this.state.day);
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.bartenderName !== this.state.bartenderName ||
            prevState.barName !== this.state.barName) {
            this.props.getTransactions(this.state.barName, this.state.bartenderName);
        }
        if (prevState.barNameRank !== this.state.barNameRank ||
            prevState.shiftName !== this.state.shiftName ||
            prevState.day !== this.state.day) {
            this.props.getRankings(this.state.barNameRank, this.state.shiftName, this.state.day);
        }
    }

    renderTable = () => {
        let keys;
        if (this.props.transactions.length !== 0 && this.props.transactions[0]) {
            keys = Object.keys(this.props.transactions[0]);
        }
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    {keys.map((key) => <th key={key}>{key}</th>)}
                </tr>
                </thead>
                <tbody>
                {
                    this.props.transactions.map(line =>
                        <tr key={Math.random()}>
                            {keys.map((key, idx) =>
                                <td key={line[key] + idx}>
                                    {line[key]}
                                </td>
                            )}
                        </tr>
                    )
                }
                </tbody>
            </Table>
        )
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
                        <Panel.Title componentClass="h3">Bartender shifts</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Select
                            defaultValue={{label: "Gunner Coleman", value: "Gunner Coleman"}}
                            onChange={(e) => this.setState({bartenderName: e.value})}
                            options={[
                                {label: "Gunner Coleman", value: "Gunner Coleman"},
                                {label: "Lorelei Lang", value: "Lorelei Lang"},
                                {label: "Bronson Guzman", value: "Bronson Guzman"},
                                {label: "Camilla Lyons", value: "Camilla Lyons"},
                            ]}
                        />
                        <Select
                            defaultValue={{label: "Yahooz Bar & Char", value: "Yahooz Bar & Char"}}
                            onChange={(e) => this.setState({barName: e.value})}
                            options={[
                                {label: "Yahooz Bar & Char", value: "Yahooz Bar & Char"},
                                {label: "Latin American Social Club", value: "Latin American Social Club"},
                                {label: "Arena Sports Bar & Grill", value: "Arena Sports Bar & Grill"},
                                {label: "Dorido's Restaurant & Lounge",value: "Dorido's Restaurant & Lounge"}
                            ]}
                        />
                        {this.renderTable()}
                    </Panel.Body>
                </Panel>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Bartender analytics</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Select
                            defaultValue={{label: "Excalibur", value: "Excalibur"}}
                            onChange={(e) => this.setState({barNameRank: e.value})}
                            options={[
                                {label: "Excalibur", value: "Excalibur"},
                                {label: "Yahooz Bar & Char", value: "Yahooz Bar & Char"},
                                {label: "Country Palace", value: "Country Palace"},
                                {label: "Trapp", value: "Trapp"},
                                {label: "Shawdows", value: "Shawdows"},
                            ]}
                        />
                        <Select
                            defaultValue={{label: "Afternoon", value: "Afternoon"}}
                            onChange={(e) => this.setState({shiftName: e.value})}
                            options={[
                                {label: "Afternoon", value: "Afternoon"},
                                {label: "Evening", value: "Evening"},
                                {label: "Night", value: "Night"},
                            ]}
                        />
                        <Select
                            defaultValue={{label: "Monday", value: "Monday"}}
                            onChange={(e) => this.setState({day: e.value})}
                            options={[
                                {label: "Monday", value: "Monday"},
                                {label: "Tuesday", value: "Tuesday"},
                                {label: "Wednesday", value: "Wednesday"},
                                {label: "Thursday", value: "Thursday"},
                                {label: "Friday",value: "Friday"},
                                {label: "Saturday",value: "Saturday"},
                                {label: "Sunday",value: "Sunday"},
                            ]}
                        />
                        <ComposedChart layout="vertical" width={600} height={400} data={this.props.rankings}
                                       margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <CartesianGrid stroke='#f5f5f5'/>
                            <XAxis type="number"/>
                            <YAxis dataKey="bartender" type="category"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='Sold' barSize={20} fill='#413ea0'/>
                        </ComposedChart>
                    </Panel.Body>
                </Panel>
            </div>

        );
    };

    render() {
        return (
            <Row>
                <Col md={8} mdOffset={2}>
                    {this.props.transactions.length !== 0 ? this.renderChart() : null}
                </Col>
            </Row>
        );

    }
}
const mapStateToProps = (state) => ({
    transactions : state.bartender.transactions,
    rankings: state.bartender.rankings,

});
const mapDispatchToProps = dispatch => bindActionCreators({
    getTransactions,
    getRankings,
}, dispatch);

const BartenderPageComponent = connect(mapStateToProps, mapDispatchToProps)(BartenderPage);

export default BartenderPageComponent;
