import React from "react"

function SearchInput({ onSubmit }) {
    const [input, setInput] = React.useState("");//input 객체를 가지고 setInput을 실행시켜라.

    const handleChange = (e) => { //e는 합성 이벤트
        setInput(e.target.value); //e.target.value = input에 입력된 값
        // setInput 인풋을 세팅해라 이시끼
    };

    const handleSubmit = (e) => { //엔터를 누를 때 실행되는 것
        e.preventDefault(); //이벤트 기본 처리를  하지 마라
    
        onSubmit(input);//App.js에 있는 getUser에 onSubmit을 할당. onSubmit의 변수를 input으로
    };

    console.log("input", input);

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="github 프로필을 검색해보세요"
            value={input}
            onChange={handleChange}
            />
        </form>
    );
}
// value={} value는 입력해준 값


export default SearchInput;