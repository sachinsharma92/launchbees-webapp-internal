import { Card, Typography } from "antd"




// styles
import "./styles.scss"

const { Paragraph } = Typography
const FeatureCard = (props: any) => {
    return (
        <Card title={props.title} style={{ width: 385 }} className="card">
            <Paragraph className="description">{props.para}</Paragraph>
            <Paragraph className="description">{props.para1}</Paragraph>
            <div className="ellipse">
                <img src={props.img_url} alt="info-img" />
            </div>
        </Card>
    )
}

export default FeatureCard