import { useState } from "react";
import UserName from "./UserName";

const Hello = ({ age }) => {
    const [name, setName] = useState("Mike"); //setName으로 name의 값이 바뀌면 컴포넌트를 재실행 
    const msg = age > 19 ? "성인입니다" : "미성년자입니다";

    return (
        <div>
            <h2>{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={() => {
                    setName(name ==="Mike" ? "Jane" : "Mike");
            }}
                
            >
                Change
            </button>
        </div>
        
    );    
};

export default Hello;