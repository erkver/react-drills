import React from "react";
import Todo from "./Todo";

const List = (props) => {
    let newItem = props.tasks
    .map((e, i) => {
        return(
            <Todo 
            key={i}
            item={e}
            />
        )
    });
    return(
        <div>
            { newItem }
        </div>
    );
}

export default List;