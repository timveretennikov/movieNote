import React from 'react'
import './MainHeader.css'
import { browserHistory } from 'react-router'

const MainHeader = () => {
    return (
        <div className="main-header">
            <span className="main-header-title"
                    onClick={() => { browserHistory.push('/') }}>MovieKeep</span>
        </div>
    )
}

export default MainHeader