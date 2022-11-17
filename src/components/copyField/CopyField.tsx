import { CopyOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";

// styles
import "./styles.scss"

const { Paragraph } = Typography
const CopyField = (props: any) => {
  return (<div className={`copy-field ${props.className}`}>
    <div className="copy-field-header">
      <Paragraph className="package-title title1">{props.title}</Paragraph>
      <Input.Group compact>
        <Input defaultValue={props.cmdVal} />
        <Button icon={<CopyOutlined />} />
      </Input.Group>
    </div>
  </div >);
};

export default CopyField;
