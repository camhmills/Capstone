import React from 'react'
import ProfileAction from './ProfileAction'
import ProfileInfo from './ProfileInfo'
import { ProfileCard, ProfileContainer } from './styled-components/ProfileStyle'

export default function Profile(props) {
    const {loginStatus} = props
    return (
        <ProfileContainer>
            <ProfileCard>
                <ProfileInfo loginStatus = {loginStatus}/>
                <ProfileAction loginStatus = {loginStatus}/>
            </ProfileCard>
        </ProfileContainer>
    )
}
