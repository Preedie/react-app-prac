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

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return <div>
    <ListGroup items={ items } heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
}

export default App; 