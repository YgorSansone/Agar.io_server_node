import React from 'react';

const person = ( props ) => {
return(
<div>
<p>Eu sou {props.name} e tenho {props.age}</p>
<p>{props.children}</p>
</div>
)
};

export default person;