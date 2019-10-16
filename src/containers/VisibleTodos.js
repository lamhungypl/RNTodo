import {connect} from 'react-redux';
import TodoListItem from '../components/TodoListItem';
import {toggleTodo} from '../actions';
const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListItem);
