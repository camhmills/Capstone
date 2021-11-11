import React, {useEffect} from 'react'
import { HeaderDiv } from './styled-components/NavbarStyle'

import {subscriptionData} from '../dataGrab'

export default function Navbar() {
    useEffect(() => { 
        const fetchData = async () => {
          let response = await subscriptionData()
          console.log(response);
        }
        fetchData()
        }, [])
    return (
        <HeaderDiv>
            Header
        </HeaderDiv>
    )
}
