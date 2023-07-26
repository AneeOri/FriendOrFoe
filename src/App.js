import "./styles.css";

export default function App() {
  function myFrin() {
    const inputs = [
      "Dick",
      "James",
      "Chris",
      "Arnold",
      "Boris",
      "Omar",
      "Ivan",
      "Rachel",
      "JoJo",
      "Nikola",
      "Bart",
      "Tim",
      "Frank",
      "Lisa",
      "Alex",
      "Bruce",
      "Ryan",
      "Max"
    ];
    const newArr = inputs
      .filter((a) => isNaN(a))
      .filter((a) => a.length > 3)
      .filter((a) => a.length < 5);

    //console.log(newArr);
  }

  function myFrin2() {
    const friends = ["Dick", "James", "Chris", "Arnold", "Boris"];
    const friend = () => friends.filter((friend) => friend.length === 4);

    console.log(friends.filter((friend) => friend.length === 4));
  }

  return (
    <div className="App">
      <button onClick={myFrin2}>theFriends</button>
    </div>
  );
}

//'Dick', 'Omar', 'Ivan', 'JoJo',
//'Bart', 'Tim', 'Lisa', 'Alex', 'Ryan', 'Max'

// to deeply equal [ 'Dick', 'Omar', 'Ivan',
//'JoJo', 'Bart', 'Lisa', 'Alex', 'Ryan' ]
