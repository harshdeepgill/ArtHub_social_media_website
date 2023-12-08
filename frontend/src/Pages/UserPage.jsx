import React from 'react'
import { useSelector } from 'react-redux';
import {useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';


const UserPage = () => {
    const [posts, setPosts] = useState([]);

    const {userName, avatar, userID, subscription} = useSelector((store) => {
        return {
            userName: store.authReducer.userName,
            avatar: store.authReducer.avatar,
            userID: store.authReducer.userID,
            subscription: store.authReducer.subscription
        }
    })

    useEffect(()=> {
        axios.get(`https://artsphere.onrender.com/arts/singleuser?id=${userID}`)
        .then(res => {
            console.log(res);
            setPosts(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    }, [])
    

  return (
    <div>
        <TOP>
            <DP>
                <div>
                    <img src={avatar} />
                </div>
            </DP>
            <DETAILS>
                <h2>{userName}</h2>
                <h3>Total posts: {posts.length}</h3>
                <h3>Subscription: {subscription}</h3>
            </DETAILS>
        </TOP>
    </div>
  )
}

export default UserPage

const TOP = styled.div`
    display: flex;
    justify-content: space-around;
`

const DP = styled.div`
    width: 40%;

    &>div{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    & img{
        width: 100%;
        object-fit: cover;
    }
`

const DETAILS = styled.div`
    width: 40%;
`
