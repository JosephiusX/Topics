import { Link } from 'react-router-dom'
import { create } from 'zustand'

export const Add = () => {
  return (
    <>
      Add
      <Form />
    </>
  )
};

    // multiple buttions for one form
// $("#my-form button").click(function(ev){
//   ev.preventDefault()// cancel form submission
//   if($(this).attr("value")=="button-one"){
//       //do button 1 thing
//   }
//   // $("#my-form").submit(); if you want to submit the form
// });

const Form = () => {
  return (
    <>
      <form >
          <input
            type="text"
            placeholder="filter/input"
            autoFocus
            // value={this.state.description}
            // onChange={this.onDescriptionChange}
          />
          <button>Add topic</button>
        </form>
    </>
  )
}

const Edit = () => {
  return (
    <>
      Edit
      <Form />
    </>
  );
};

const ListItem = () => {
  return (
    <>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        <p>{phrases}</p>
      </Link>
    </>
  )
}

const List = () => {
  return (
    <>
      <h1>Topics List</h1>
      ListItems...
      {topics.map((topic) => {
      return <ListItem key={topic.id} {...topic} />;
      })}
    </>
  )
};

export const Page = () => {
  return (
    <>
      <h1>Topics</h1>
      <Form />
      <List />
    </>
  )
}


// const ListFilters = () => {
  //   return (
    //     <>
    //       ListFilters
  //     </>
  //   )
  // }