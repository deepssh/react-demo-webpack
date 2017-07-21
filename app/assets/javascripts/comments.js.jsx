var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className='HelloWorld'>
        <p>Hello, world!</p>
      </div>
      );
  }
});

var ready = function () {
  React.renderComponent(
    <HelloWorld />,
    document.getElementById('comments')
  );
};

$(document).ready(ready);