import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com/users/",
});

export const getUserAPI = async (username) => {
    const { data } = await client.get(username);
    
    return data;
};

//프로미스를 리턴하기 위해 async await 사용.
//API를 가져오는 시간에 다른 언어들이 실행 되지 않게 하기 위해 /

