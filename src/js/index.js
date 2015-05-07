var Divider = React.createClass({
  componentDidMount: function() {
    console.info(this.props);
  },
  render: function() {
    return (
      <div className="Divider">
        <h2>{this.props.children}</h2><hr/>
      </div>
    );
  }
});

React.render(<Divider>質問</Divider>, document.getElementById('main'));