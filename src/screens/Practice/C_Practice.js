import React from 'react'

import {
    Home
} from './C'

const C_Practice = ({ pageId }) => {
    const renderPage = () => {
        switch(pageId) {
            case 0: return <Home />
            default: return <></>
        }
    }

    return renderPage()
}

export default C_Practice
