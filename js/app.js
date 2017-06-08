var info = [{
  "author": "Gorbachev",
  "bookname": "bla-bla-bla",
  "pages": "542",
  "img" : "https://images-na.ssl-images-amazon.com/images/I/61nPVlgFr4L._SX491_BO1,204,203,200_.jpg"
},
{
  "author": "Vergeles",
  "bookname": "do nothing",
  "pages": "842",
  "img" : "https://keithmurnighan.files.wordpress.com/2012/03/do-nothing-cover3d_400px.gif?w=800&h=608"
},
{
  "author": "Asyaleycum",
  "bookname": "Go Forward",
  "pages": "442",
  "img" : "http://www.hoffan.org/wp-content/uploads/2015/12/GoForward-book-Front-cover.jpg"
}]


var Books = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length>0) {
    newsTemplate = data.map(function(item, index) {
      return(
        <div key={index}>

          <img src= {item.img}/>
          <p className="books__author"> Автор: {item.author}</p>
          <p className="books__bookname"> Название книги: {item.bookname}</p>
          <p className="books__pages"> страниц {item.pages}</p>
        </div>
      )
    })
  } else {
    newsTemplate = <p> Книг нет </p>
  }

    return (
      <div className="books">
        <p className= {data.length > 0 ? 'bookprrsent':'booknone'}> Книг: {data.length}</p>
        {newsTemplate}
       </div>
    );
  }
});


var App = React.createClass({
  render: function() {

    return (
      <div>
      <Books data={info}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
