/** @format */

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        laps: state.timeReducer.laps,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLap: (data) => dispatch(data),
        resetLap: (data) => dispatch(data),
    };
};

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ms: 0, s: 0, m: 0, start: false, interValid: null };

        this.startWatch = this.startWatch.bind(this);
        this.stopWatch = this.stopWatch.bind(this);
        this.resetWatch = this.resetWatch.bind(this);
        this.setLap = this.setLap.bind(this);
    }

    startWatch() {
        let interValid = setInterval(() => {
            if (this.state.ms === 99) {
                this.setState({ ms: 0 });
                this.setState({ s: this.state.s + 1 });
            }
            if (this.state.s === 60) {
                this.setState({ s: 0 });
                this.setState({ m: this.state.m + 1 });
            }
            this.setState({ ms: this.state.ms + 1 });
        }, 10);
        this.setState({ interValid: interValid });
    }

    stopWatch() {
        clearInterval(this.state.interValid);
    }

    resetWatch() {
        clearInterval(this.state.interValid);
        this.setState({ ms: 0, s: 0, m: 0, start: false });
        this.props.setLap({
            type: "RESET_LAP",
        });
    }

    setLap() {
        this.props.setLap({
            type: "SET_LAP",
            payload: { m: this.state.m, s: this.state.s, ms: this.state.ms },
        });
    }

    render() {
        return (
            <>
                <div className="heading">Stopwatch</div>
                <div className="container">
                    <div className="timer">
                        {this.state.m}
                        <span>m</span>:{this.state.s}
                        <span>s</span>:<span>{this.state.ms}</span>
                    </div>
                    <div className="btn-group">
                        {this.state.start ? (
                            <div
                                onClick={() => {
                                    this.setState({ start: false });
                                    this.stopWatch();
                                }}
                                className="btn from-left"
                            >
                                Stop
                            </div>
                        ) : (
                            <div
                                onClick={() => {
                                    this.setState({ start: true });
                                    this.startWatch();
                                }}
                                className="btn from-left"
                            >
                                Start
                            </div>
                        )}
                        <div
                            onClick={() => {
                                this.setLap();
                            }}
                            className="btn from-left"
                        >
                            Lap
                        </div>
                        <div
                            onClick={() => {
                                this.resetWatch();
                            }}
                            className="btn from-left"
                        >
                            Reset
                        </div>
                    </div>
                </div>
                <hr className="line" />
                <div className="container">
                    {this.props.laps.length === 0 ? (
                        <h1 className="timer">Laps</h1>
                    ) : (
                        this.props.laps.map((lap) => {
                            return (
                                <div className="timer">
                                    {lap.m}
                                    <span>m</span>:{lap.s}
                                    <span>s</span>:<span>{lap.ms}</span>
                                </div>
                            );
                        })
                    )}
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
