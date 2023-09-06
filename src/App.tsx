import ListGroup from "./components/ListGroup";

function App() {
  let items = ["delhi", "mumbai", "ahmedabad", "rajkot", "vadodara"];

  let selectedIndex = 0;

  // items = [];

  return (
    <div>
      <h1>List </h1>
      {items.length === 0 && <p>Not Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
