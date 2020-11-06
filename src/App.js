import React from "react"; // 연결
import SearchInput from "./component/SearchInput"
import SearchResult from "./component/SearchResult"
import './App.css';

/*
import axios from 'axios';

const client = axios.create({ //client= axios. 서버랑 연결하게 해주는 것
    baseURL: "https://api.github.com/users/" //url을 통해
});
*/

import { getUserAPI } from "./lib/api";

function App() {
  const [user, setUser] = React.useState(null);//조건부 렌더링을 하기 위해 상태 초기값 null로
  // 상태 초기값 null. 상태 값 갱신 함수=setUser, 상태 값 저장 변수=user. = HOOK
  //==class 가 아닌 함수 컴포넌트 에서도 State와 Lifecycle을 다룰 수 있게 해주는 기술
// state. 변동되는 값을 사용하도록 도와주는 것. 
//
  /*
  const getUserAPI = async (username) => {
    const { data } = await client.get(username);
    console.log("data", data);
  */
  const getUser = async (username) => {
    const data = await getUserAPI(username);

    setUser(data);//user
  };
  //promise를 실제로 사용할 수 있도록 풀어내는? 코드

  /*
React.useEffect(() => {
  //getUserAPI("pa-rang");
  getUser("pa-rang");
}, []);
*/

console.log("user", user);


  return (
    <>
      <SearchInput onSubmit={getUser}/>
      <SearchResult user={user} />
    </>
  );
}

export default App;
