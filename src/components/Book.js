function Book(props){
    return(
        <div>

        <img src={props.img} alt="book" />
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
      </div>
    );
}

export default Book;
    
