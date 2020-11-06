import React from "react";

function SearchResult({ user }) {
    return (
        user && ( //user가 데이터가 있을 때에 실행되기 위해 . 실행 조건부 랜더링
            <div>
                <img src={user.avatar_url} alt={user.name} />
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <ul>
                        <li>
                            <strong>followers</strong> {user.followers}
                        </li>
                        <li>
                            <strong>Following</strong> {user.following}
                        </li>
                        <li>
                            <strong>Repos</strong> {user.public_repos}
                        </li>
                    </ul>
                </div>
            </div>
        )
    );
}

export default SearchResult;
