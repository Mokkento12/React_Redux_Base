import { connect } from "react-redux";

function Likes(props) {
  console.log("render", props);

  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps >", state);

  return {
    likes: state.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      const action = { type: "INCREMENT" };

      dispatch(action);
    },
    onDecrementLikes: () => {
      console.log("click decrement");

      const action = { type: "DECREMENT" };

      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
