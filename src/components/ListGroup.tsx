function ListGroup() {
  let places = [" hoem", "NU", " makj", " akjs"];
  return (
    <>
      <h1> this is a simple list </h1>
      {places.length === 0 && <p> no places in her</p>}
      <ul className="list-group">
        {places.map((places, index) => (
          <li
            className="list-group-item"
            key={places}
            onClick={() => console.log(places, index)}
          >
            {" "}
            {places}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
