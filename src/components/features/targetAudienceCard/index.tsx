import { useState } from "react";
import PageHeaderIntro from "../../pageHeaderIntro/PageHeaderIntro"
import leftArrow from "../../../assets/icons/arrow-left.svg"
import checkIcon from "../../../assets/icons/check.svg"
import uploadIcon from "../../../assets/icons/upload.svg"
import { Form, message, UploadProps } from 'antd';
import { Button, Card, Col, Input, Modal, Row, Select, Typography, Upload } from "antd"
import { CaretDownOutlined, CloudUploadOutlined } from "@ant-design/icons"

// styles
import "./styles.scss"

const { Title, Paragraph } = Typography
const { Dragger } = Upload
const OPTIONS = ['Microsoft', 'Uber', 'Nykaa'];

const TargetAudienceCard = () => {

	const [modalOpen, setModalOpen] = useState(false);
	const [modalTarget, setModalTarget] = useState(false);
	const [selectedItems, setSelectedItems] = useState<string[]>([]);


	const onChange = (e: any) => {
		console.log(e);
	}

	//  drag and upload-data
	const props: UploadProps = {
		name: 'file',
		multiple: true,
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files);
		},
	};
	// select-items============


	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
	return (
		<section className="target-audience-page">
			<div className="page-header-title">
				<img src={leftArrow} alt="left-arrow" className="left-icon" />
				<PageHeaderIntro title="Target Audience" />
			</div>

			<Row>
				<Col sm={14}>
					<Card>
						<div className="card-top">
							<div className="card-tag">
								<Title level={3} className="card-tag-title title">Select Enterprise</Title>
								<Paragraph className="description">Target the enterprise users of your product. </Paragraph>
							</div>
							<div className="upload-btn btn">
								<Button type="primary" size="large" icon={<CloudUploadOutlined />} onClick={() => setModalOpen(true)}>Upload CSV</Button >
							</div>
						</div>
						<div className="select-data">
							<Select
								suffixIcon={<CaretDownOutlined />}
								mode="multiple"
								placeholder="Select"
								showArrow
								options={filteredOptions.map(item => ({
									value: item,
									label: item,
								}))}
							/>
						</div>
					</Card>
					<div className="btn-section">
						<Button size="large" className='btn-outline'>Skip for now</Button>
						<Button type="primary" size="large" onClick={() => setModalTarget(true)}>Save Target</Button>
					</div>
				</Col>
			</Row>


			<Modal
				centered
				className="target-set-modal"
				visible={modalTarget}
				onCancel={() => setModalTarget(false)}
				footer={null}
			>
				<div className="modal-card">
					<img src={checkIcon} className="img-icon" alt="" />
					<h4 className="title4">Target Set</h4>
					<p className="description">The Target is set for the <span> feature FeatueName.</span></p>
					<Button type="primary" size="large" block>Button</Button>
				</div>
			</Modal>

			<Modal
				centered
				className="data-modal"
				visible={modalOpen}
				onCancel={() => setModalOpen(false)}
			>
				<Row className="modal-data-upload">
					<Col className="modal-header">
						<Paragraph className="header-title">Select Enterprise : Upload CSV</Paragraph>
						<a href="#" download>Download Sample CSV</a>
					</Col>
					<Col className="modal-content">
						<Row className="content-data" gutter={[0, 22]}>
							<Col className="content-header top">
								<div className="header-para">We only support data in our CSV format.</div>
								<a href="#" download> Download Sample CSV</a>
							</Col>
							<Col className="upload middle">
								<Form initialValues={{ remember: true }}
									onFinish={onFinish}
									onFinishFailed={onFinishFailed}
									autoComplete="off">
									<Form.Item name="upload_csv" rules={[{ required: true, message: 'Please upload your file!' }]}>
										<Dragger {...props}>
											<Paragraph className="ant-upload-drag-icon">
												<img src={uploadIcon} alt="upload-img" />
											</Paragraph>
											<Paragraph className="ant-upload-text">Select a CSV file from here.</Paragraph>
											<Paragraph className="ant-upload-hint">
												or simply drag the file here.
											</Paragraph>
										</Dragger>
									</Form.Item>
								</Form>
							</Col>
							<Col className="url-upload bottom">
								<span>or Upload a URL </span>
								<div className="upload-input">
									<Input type="upload" />
									<Button type="primary" style={{ height: 44, width: 129 }}>Upload</Button>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Modal>
		</section >
	)
}

export default TargetAudienceCard;