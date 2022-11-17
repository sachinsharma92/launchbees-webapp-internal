import { useState } from "react";
import MainLayout from "../../common/mainLayout"
import PageHeaderIntro from "../../components/pageHeaderIntro/PageHeaderIntro"
import leftArrow from "../../assets/icons/arrow-left.svg"
import uploadIcon from "../../assets/icons/upload.svg"
import { Form, message, UploadProps } from 'antd';
import { Button, Card, Col, Input, Modal, Row, Select, Tabs, Typography, Upload } from "antd"
import { CaretDownOutlined, CloudUploadOutlined } from "@ant-design/icons"

// styles
import "./styles.scss"

const { TabPane } = Tabs
const { Title, Paragraph } = Typography
const { Dragger } = Upload
const OPTIONS = ['Microsoft', 'Uber', 'Nykaa'];
const TargetAudience = () => {

	const [modalOpen, setModalOpen] = useState(false);
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
			<MainLayout>
				<div className="page-header-title">
					<img src={leftArrow} alt="left-arrow" className="left-icon" />
					<PageHeaderIntro title="Target Audience" />
				</div>

				<Row className="target-audience">
					<Col className="audience-tabs">
						<Tabs
							defaultActiveKey={"2"}
							onChange={onChange}
							centered
							style={{ display: "flex", justifyContent: "flex-start" }}
						>
							<TabPane tab="All users" key="1" style={{ width: "50%" }}>
								<Row className="user-container">
									<Col>
										<Card style={{ width: 640 }}>
											<div className="card-top">
												<div className="card-tag">
													<Title level={3} className="card-tag-title title">Select Enterprise</Title>
													<Paragraph className="description">Target the enterprise users of your product. </Paragraph>
												</div>
												<div className="upload-btn btn">
													<Button type="primary" icon={<CloudUploadOutlined />}>Click to Upload</Button >
												</div>
											</div>
											<div className="select-data">
												<Select
													suffixIcon={<CaretDownOutlined />}
													mode="multiple"
													placeholder="Select"
													showArrow
													style={{ width: '100%' }}
													options={filteredOptions.map(item => ({
														value: item,
														label: item,
													}))}
												/>
											</div>
										</Card>
										<div className="save-target-btn" style={{ marginTop: 24, height: 44 }}>
											<Button type="primary" style={{ height: 44, width: 129 }}>Save Taget</Button>
										</div>
									</Col>
								</Row>
							</TabPane>
							<TabPane tab="Select Users" key="2">
								<Row className="user-container">
									<Col>
										<Card style={{ width: 640 }}>
											<div className="card-top">
												<div className="card-tag">
													<Title level={3} className="card-tag-title title">Select Enterprise</Title>
													<Paragraph className="description">Target the enterprise users of your product.</Paragraph>
												</div>
												<div className="upload-btn btn">
													<Button type="primary" icon={<CloudUploadOutlined />} onClick={() => setModalOpen(true)}>Click to Upload</Button >
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
												</div>
											</div>
											<div className="select-data">
												<Select
													suffixIcon={<CaretDownOutlined />}
													mode="multiple"
													placeholder="Select"
													showArrow
													style={{ width: '100%' }}
													options={filteredOptions.map(item => ({
														value: item,
														label: item,
													}))}
												/>
											</div>
										</Card>
										<div className="save-target-btn" style={{ marginTop: 24, height: 44 }}>
											<Button type="primary" style={{ height: 44, width: 129 }}>Save Taget</Button>
										</div>
									</Col>
								</Row>

							</TabPane>

						</Tabs>
					</Col>
				</Row>
			</MainLayout >
		</section >
	)
}

export default TargetAudience