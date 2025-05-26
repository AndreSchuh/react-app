function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokio',
        'London',
        'Paris'
    ]

    const getMessage = () => {
        return items.length === 0 && <p>No item founded</p>;
    }

    return (
        <>
        <h1>List Group</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map(item => 
                (<li className="list-group-item" key={item} onClick={() => console.log(item + " was clicked!")}>{item}</li>))}
        </ul>
    </>
    );
}

export default ListGroup;