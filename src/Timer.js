import React, {Component} from 'react';

export default class Timer extends Component{
  static propTypes = {
    date: React.PropTypes.instanceOf(Date),
    dateTo: React.PropTypes.instanceOf(Date)
  }
  static defaultProps = {
    date: new Date()
  }
  constructor(props){
    super(props);
    console.log(this.props.dateTo);
    var dateDiff = Date.parse(this.props.dateTo) - Date.parse(this.props.date);
    console.log(dateDiff)
    this.state = {
      days: Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((dateDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((dateDiff / 1000 / 60) % 60),
      seconds: Math.floor((dateDiff / 1000) % 60)
    }
  }
  render(){
    return (
      <div id="clockdiv">
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
