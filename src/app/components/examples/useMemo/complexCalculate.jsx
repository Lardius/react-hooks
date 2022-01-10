import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    console.log("render fact");
return n ? n * factorial(n - 1) : 1;
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(10);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "success";
    const fact = useMemo(() => factorial(value), [value]);

    useEffect(() => {
        console.log("render");
    });
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider/>
                <p>Result factorial: {fact}</p>
                <p>Value {value}</p>
                <button className='btn btn-primary mx-2' onClick={() => setValue(prevState => prevState + 1)}>Increment</button>
                <button className='btn btn-primary mx-2' onClick={() => setValue(prevState => prevState - 1)}>Decrement</button>

            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider/>
                <button className={"btn mx-2 btn-" + buttonColor} onClick={() => setOtherState(prevState => !prevState)}>color</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
