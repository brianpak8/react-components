// // TODO
// //
// var GroceryList = () => (
//   <ul>
//     <li>bbq sauce</li>
//     <li>ketchup</li>
//     <Ranch />
//     <Mustard />
//
//   </ul>
// )
//
//
// var Ranch = () => (
//   <li>ranch</li>
// );
//
// var Mustard = () => (
//   <li>mustard</li>
// );
//
// ReactDOM.render(<GroceryList />, document.getElementById('app'));
//
// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.item[0]}</li>
//     <li>{props.item[1]}</li>
//     <li>{props.item[2]}</li>
//   </ul>
// );
// var GroceryList = () => (
//   <div>
//     <GroceryListItem item={['butter', 'bread', 'cheese']} />
//   </div>
//
// );
//
// ReactDOM.render(<GroceryList />, document.getElementById('app'));




class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
  }
}



var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
    <GroceryListItem item={item} />
  )}
  </ul>

);



ReactDOM.render(<GroceryList items={['tea', 'coffee', 'water']}/>, document.getElementById('app'));
