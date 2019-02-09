const initState = {
  projects: [
    { id: "1", title: "help me sth", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with youshi", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create error project", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
