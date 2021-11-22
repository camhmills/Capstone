import React from 'react'
import Avatar from 'boring-avatars'
import { ProfileInfoDiv } from './styled-components/ProfileStyle'

export default function ProfileInfo(props) {
    const {loginStatus} = props;

    return (
        <ProfileInfoDiv>
            <Avatar
            size = {200}
            name = {loginStatus.username}
            variant = "marble"
            colors = {["#65d4ee", "#9de89c", "#fac12f", "#cfe9ef", "#FF4A3B"]}
            />
            <h2>{loginStatus.username}</h2>
        </ProfileInfoDiv>
    )
}
