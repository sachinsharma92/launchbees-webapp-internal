import { Image, Typography } from 'antd'
import React from 'react'


// styles
import "./styles.scss"

const PageHeaderIntro = (props: any) => {
    return (
        <div className="page-header">
            <h3 className="header-title title2">{props.title}</h3>
        </div>
    )
}

export default PageHeaderIntro