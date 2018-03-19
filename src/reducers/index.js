const estadoInicial = {
  react: 0,
  angular: 0,
  vuejs: 0
};

export default (state = estadoInicial, action) => {
  switch (action.type) {
    case "voto_react":
      console.log("voto react");
      return Object.assign({}, state, {
        react: state.react + 1
      });

    case "voto_angular":
      console.log("voto angular");
      return Object.assign({}, state, {
        angular: state.angular + 1
      });

    case "voto_vuejs":
      console.log("voto vuejs");
      return Object.assign({}, state, {
        vuejs: state.vuejs + 1
      });
    default:
      return state;
  }
};
