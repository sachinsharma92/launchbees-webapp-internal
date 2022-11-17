import { Button, Layout, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import ROUTES from '../../router';

// Images
import { LogoDark } from '../../assets/logo';
import arrowIcon from "../../assets/icons/up-down.svg"
import featureIcon from "../../assets/icons/feature.svg"
import homeIcon from "../../assets/icons/home.svg"
import usersIcon from "../../assets/icons/users.svg"
import organisationsIcon from "../../assets/icons/organisations.svg"
import settingIcon from "../../assets/icons/setting.svg"
import upgradeIcon from "../../assets/icons/upgrade.svg"
import docsIcon from "../../assets/icons/docs.svg"
import guideIcon from "../../assets/icons/guide.svg"
import questionIcon from "../../assets/icons/question.svg"

// styles
import "./styles.scss";

const { Header, Sider, Content } = Layout;
interface MainLayoutScreenProps {
  children: any
}

function MainLayout(props: MainLayoutScreenProps) {

  return (
    <Layout>
      <Sider className='theme-sidebar'>
        <div className="logo-sec">
          <LogoDark className="logo" />
        </div>

        <div className="download-btn">
          <Button><Avatar className='theme-style'>M</Avatar>PreProd  <Avatar src={arrowIcon} className="icon-style" size={18} /></Button>
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <Avatar src={homeIcon} shape="square" className="icon-style" size={18} />,
              label: (
                <Link to={ROUTES.HOME_SCREEN}>Home</Link>
              ),
            },
            {
              key: '2',
              icon: <Avatar src={featureIcon} shape="square" className="icon-style" size={18} />,
              label: (
                <Link to={ROUTES.ADD_FEATURE}>Feature</Link>
              ),
            },
            {
              key: '3',
              icon: <Avatar src={usersIcon} shape="square" className="icon-style" size={18} />,
              label: (
                <Link to={"/target-audience"}>Users</Link>
              ),
            },
            {
              key: '4',
              icon: <Avatar src={organisationsIcon} shape="square" className="icon-style" size={18} />,
              label: (
                <Link to={ROUTES.HOME_SCREEN}>Organisations</Link>
              ),
            },
            {
              key: '5',
              icon: <Avatar src={settingIcon} shape="square" className="icon-style" size={18} />,
              label: (
                <Link to={ROUTES.HOME_SCREEN}>Settings</Link>
              ),
            },
          ]}
        >
        </Menu>

        <div className="user-btn">
          <Button type="link"><Avatar src="https://joeschmoe.io/api/v1/random" size={40}>M</Avatar>Jane Smith <Avatar src={arrowIcon} className="icon-style" size={18} /></Button>
        </div>
      </Sider>
      <Layout className="site-layout theme-layout-main">
        <Header className='horizontal-navigation'>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <Avatar src={upgradeIcon} shape="square" className="icon-style" size={15} />,
                label: 'Upgrade',
              },
              {
                key: '2',
                icon: <Avatar src={guideIcon} shape="square" className="icon-style" size={15} />,
                label: 'Updates',
              },
              {
                key: '3',
                icon: <Avatar src={docsIcon} shape="square" className="icon-style" size={15} />,
                label: 'Docs',
              },
              {
                key: '4',
                icon: <Avatar src={questionIcon} shape="square" className="icon-style" size={15} />,
                label: 'FAQ',
              },
              {
                key: '5',
                icon: <Avatar src={docsIcon} shape="square" className="icon-style" size={15} />,
                label: 'Settings',
              },
            ]}
          />
        </Header>
        <Content className="site-content">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout