import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {InputGroup, FormGroup, FormControl, Button, Row, Col, Table} from "react-bootstrap";
import {getData} from "../Action/sql";
import {connect} from "react-redux";
class SQLInterface extends Component {

    state = {
        sql: "",
    }

    renderTable = () => {
        let keys;
        if (this.props.data[0]) {
            keys = Object.keys(this.props.data[0]);
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
                        this.props.data.map(line =>
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
    render() {

        return (
            <div>
                <Row>
                    <Col md={8} mdOffset={2}>
                        <FormGroup>
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    value={this.state.sql}
                                    onChange={(e) => this.setState({sql: e.target.value})}
                                />
                                <InputGroup.Button>
                                    <Button onClick={() => this.props.getData(this.state.sql)}>Send</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                        {this.props.data.length !== 0 ? this.renderTable() : <h2>Please write a valid sql</h2>}
                    </Col>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.sql.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData,
}, dispatch);

const SQLInterfaceComponent = connect(mapStateToProps, mapDispatchToProps)(SQLInterface);

export default SQLInterfaceComponent;