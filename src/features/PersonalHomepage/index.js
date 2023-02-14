import React from "react";
import { Container } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { useEffect } from "react";

export const PersonalHomepage = () => {
    const [count, setCount]=React.useState(0);
    const [name, setName]= React.useState("");
    useEffect(()=>{
        document.title=`Wartośc licznika: ${count}, name: ${name}`;
    }, [count, name])
    //document.title=`Wartośc licznika: ${count}, name: ${name}`;
    console.log(`count na zewnatrz increment: ${count}`);
    const incrementCounter=()=>{
        setCount(count+1);
        console.log(`count wewnatrz increment: ${count}`);
    };


    return (
    <>
    <Container>
        <MainInformation />
        <Skills />
        <Portfolio />
        <p>Licznik: {count}</p>
        <button onClick={incrementCounter}>+1</button>
        <p>Name:<input value={name} onChange={({target})=>setName(target.value)}></input></p>
    </Container>
    </>
    );

    };

