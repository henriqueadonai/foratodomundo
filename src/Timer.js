import React, {Component} from 'react';
import moment from 'moment';


export default class Timer extends Component{
  static propTypes = {
    dateTo: React.PropTypes.instanceOf(Date)
  }

  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  tick(){
    const dataEleicao = moment(new Date(this.props.dateTo))
    const duration = moment.duration(dataEleicao.diff(new Date()));

    this.setState({
      days: Math.floor(duration.asDays()),
      hours: Math.floor(duration.asHours() % 24),
      minutes: Math.floor(duration.asMinutes() % 60),
      seconds: Math.floor(duration.asSeconds() % 60)
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){
    return (
          <div id="clockdiv" className="dtc tc white ph3 ph4-l">
            <div>
              <span className="days">{this.state.days}</span>
              <div className="smalltext">Dias</div>
            </div>
            <div>
              <span className="hours">{this.state.hours}</span>
              <div className="smalltext">Horas</div>
            </div>
            <div>
              <span className="minutes">{this.state.minutes}</span>
              <div className="smalltext">Minutos</div>
            </div>
            <div>
              <span className="seconds">{this.state.seconds}</span>
              <div className="smalltext">Segundos</div>
            </div>
          </div>
    )
  }
}
