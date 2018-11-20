import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {Row, Col, Table} from "react-bootstrap";
import {getData} from "../Action/sql";
import {connect} from "react-redux";
import {getAllDrinkers} from "../Action/drinker";
class DrinkerHomePage extends Component {

    componentDidMount() {
        this.props.getAllDrinkers();
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
                                    {
                                        key === "name" ? <a href={`/drinker/${line[key]}`}>{line[key]}</a> : line[key]
                                    }
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
                        {this.props.data.length !== 0 ? this.renderTable() : <h2>Loading...</h2>}
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.drinker.allDrinkers,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllDrinkers,
}, dispatch);

const DrinkerHomePageComponent = connect(mapStateToProps, mapDispatchToProps)(DrinkerHomePage);

export default DrinkerHomePageComponent;