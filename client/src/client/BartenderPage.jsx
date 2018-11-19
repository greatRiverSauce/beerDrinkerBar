import React, {Component} from "react";
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import {Row, Col, Panel, DropdownButton, MenuItem} from "react-bootstrap";


class BartenderPage extends Component {
    componentDidMount () {
        const { bartenderName } = this.props.match.params;
        console.log(bartenderName);
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
                        <Panel.Title componentClass="h3">Top 10 Largest Spenders</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ComposedChart layout="vertical" width={600} height={400} data={data}
                                       margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <CartesianGrid stroke='#f5f5f5'/>
                            <XAxis type="number"/>
                            <YAxis dataKey="name" type="category"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
                        </ComposedChart>
                    </Panel.Body>
                </Panel>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Top 10 Most Popular brands</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ComposedChart layout="vertical" width={600} height={400} data={data}
                                       margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <CartesianGrid stroke='#f5f5f5'/>
                            <XAxis type="number"/>
                            <YAxis dataKey="name" type="category"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
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
                    <Row>
                        <Col md={4}>
                            <DropdownButton
                                bsStyle={"default"}
                                title={"default"}
                                id={"default"}
                            >
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>
                                    Active Item
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        </Col>
                        <Col md={8}>
                            {this.renderChart()}
                        </Col>
                    </Row>

                </Col>
            </Row>
        );

    }
}

export default BartenderPage;
