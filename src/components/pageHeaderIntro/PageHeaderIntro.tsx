import { Typography } from 'antd'

// styles
import "./styles.scss"

const { Title } = Typography

const PageHeaderIntro = (props: any) => {
    return (
        <div className="page-header">
            <Title className="header-title title2" level={1}>{props.title}</Title>
        </div>
    )
}

export default PageHeaderIntro