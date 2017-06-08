var info = [{
  "author": "Gorbachev",
  "text": "bla-bla-bla",
  "pages": "542"
},
{
  "author": "Vergeles",
  "text": "blr-blr-blr",
  "pages": "842"
},
{
  "author": "Asyaleycum",
  "text": "blu-blu-blu",
  "pages": "442"
}]


var News = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length>0) {
    newsTemplate = data.map(function(item, index) {
      return(
        <div key={index}>
        <p> Новостей: {data.length}</p>
        <p className="news__author"> {item.author}:</p>
        <p className="news__text"> {item.text}:</p>
        <p className="news__pages"> страниц {item.pages}</p>
        </div>
      )
    })
  } else {
    newsTemplate = <p> Новостей нет </p>
  }

    return (
      <div className="news">
        {newsTemplate}
       </div>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments"> Коментарий </div>
    );
  }
});

var App = React.createClass({
  render: function() {

    return (
      <div>
      <News data={info}/>
      <Comments/>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
