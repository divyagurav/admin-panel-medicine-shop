import React from 'react';


const List=(props)=>{
return <div>
{props.lists.map((list)=><ul><li key={list.name}>{list.name}={list.description}={list.price}</li></ul>)}
</div>
}

export default List;