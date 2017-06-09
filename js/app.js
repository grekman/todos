$(document).ready(function() {});
var todo = [{
  "task" : "task 1",
  "time" : "Total time is"
},
{
  "task" : "task 2",
  "time" : "Total time is"
},
{
  "task" : "task 3",
  "time" : "Total time is"
}]


var Task = React.createClass({
  propTypes:{
    data: React.PropTypes.shape({
      task: React.PropTypes.string.isRequired,
      time: React.PropTypes.string.isRequired
    })
  },
  render: function() {
    var task = this.props.data.task,
        time = this.props.data.time;
    return (
      <div>
        <input type="checkbox" className="filled-in" id={task} style={{display:"inline-block"}}/>
        <label htmlFor={task}>{task}</label>
        <p style={{display:"inline-block", marginLeft:"20px"}}>{time}</p>
      </div>
    )
  }
})

var Todo = React.createClass({
  render: function() {
    var data = this.props.data;
    var todoTemplate;

    if (data.length > 0) {
      todoTemplate = data.map(function(item, index){
        return (
          <li key={index} className="collection-item">
            <Task data={item}/>
          </li>
        )
      });
      return (
        <ul className="collection">
          {todoTemplate}
        </ul>
      )
    }
  }
})

var NewTodo = React.createClass({
  render: function() {
    return (
              <div className="input-field">
                <input id="task" type="text" className="validate"/>
                <label htmlFor="task" >What should be done?</label>
              </div>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div className="main col l6 m8 s12 z-depth-5">
        <h1>Create your plans</h1>
          <NewTodo/>
          <Todo data={todo}/>
      </div>
    )
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
