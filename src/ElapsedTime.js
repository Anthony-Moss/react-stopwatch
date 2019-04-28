import React from 'react';

class ElapsedTime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hours:'',
            minutes:'',
            seconds: props.seconds || 0
        };
    }


    render() {
        return (
            <div>
                <h1>
                    {(this.state.seconds)} seconds
                </h1>
                <button
                    onClick={this._startStopwatch}
                >Start</button>
                <button
                    onClick={this._stopStopwatch}
                >Stop</button>
                <button
                    onClick={this._resetStopwatch}
                >Reset</button>
            </div>
        );
    }

    _startStopwatch = () => {
        if (!this.state.seconds) {
            this.interval = setInterval(() => {
                this.setState({
                    seconds: this.state.seconds + 1
                });
            }, 1000)
        } else if (this.state.seconds) {
            clearInterval(this.interval);
                this.interval = setInterval(() => {
                this.setState({
                    seconds: this.state.seconds + 1
                });
            }, 1000)
        }
    }

    _stopStopwatch = () => {
        clearInterval(this.interval);
    }

    _resetStopwatch = () => {
        clearInterval(this.interval);
        this.setState({
            seconds: 0
        });
    }
}

export default ElapsedTime;