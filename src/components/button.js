import { useState } from 'react';

function Button() { {
    const [count, setCount] = useState(0);


function handleClick(){
    setCount(count + 1);
}

return (
    <button onClick={handleClick}>
      Like {count} Button
    </button>
  );
}
}
export default Button;