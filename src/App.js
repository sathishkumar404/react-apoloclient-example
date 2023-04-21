import logo from './logo.svg';
import './App.css';

import { gql, useQuery, useMutation  } from '@apollo/client';

const GET_BOOKS = gql`

  query getBooks {

    books {
      author
      title
    }
  }

`;

const ADD_TODO = gql`

  mutation AddTodo($title: String!,$author: String!) {

    addBook(title: $title,author:$author) {
      title
      author

    }

  }

`;


function App() {

  const { loading, error, data } = useQuery(GET_BOOKS);
  const [addTodo, todo] = useMutation(ADD_TODO);


  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <header className="App-header">
       {
        data && data.books.map((item)=>{
          return (
            <p>
          {item.author}
        </p>
          )
        })
       }
        
        <button onClick={()=>{
           addTodo({ variables: { title: "test",author:'sathish' } });
        }}>Add Books</button>
      </header>
    </div>
  );
}




export default App;
