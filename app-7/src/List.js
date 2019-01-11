import React from "react";
import Todo from "./Todo";

const List = ({tasks}) => {
    let newItem = tasks.map((e, i) => {
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