
export const createProject=(project)=>{
  return (dispatch,getState,{getFirebase,getFirestore})=> {
    // make async to db
    const firestore=getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName:'Net',
      authorLastName:'Ninja',
      authorId:12345,
      createdAt: new Date()
    }).then(()=>{   
      dispatch({
        type:'ADD_PROJECT',
        project
      })
    }).catch(err=>dispatch({type:'CREATE_PROJECT_ERROR',err}));
  }
};