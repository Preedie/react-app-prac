import ListGroup from "./components/ListGroup";


function App() {
  let items = [
    'Brisbane',
    'Sydney',
    'Melbourne',
    'Adelaide',
    'Darwin',
    'Perth'
  ]

  return <div><ListGroup items={ items } heading="Cities"/></div>
}

export default App; 