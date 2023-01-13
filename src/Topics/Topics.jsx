import { Link, Form } from 'react-router-dom'
import { create } from 'zustand'

const useTopicsStore = create((set) => ({
  topics: ['topic one', 'topic two'],
  addTopic: (e) => set((state) => ({ topics:  state.topics ,...e.target.value }))
}))

const TopicsForm = () => {

  const topics = useTopicsStore((state) => state.topics)

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form >
          <input
            type="text"
            placeholder="filter/input"
            autoFocus
            value={topics}
            onChange={this.onDescriptionChange}
          />
          <button>Add topic</button>
        </form>
    </>
  )
}

export const Add = () => {
  return (
    <>
     <h1>Add Topic</h1>
      <TopicsForm
        onSubmit={(topic) => {
          props.dispatch(addTopic(topic));
          props.history.push('/topics');
        }}
      />
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

export const Edit = () => {
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