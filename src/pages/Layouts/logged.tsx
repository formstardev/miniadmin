import React from 'react';
import { Layout, Menu, Avatar, Popover, Button,Image,   } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useLayout } from '../../contexts';
import LoggedRoute from '../../routes/privates/logged';
import './logged.css';
import { 
  ROUTES_Willkommen,
  ROUTES_Renovierungs_Check,
  ROUTES_Checklisten,
  ROUTES_Musterschreiben,
  ROUTES_Vermieter_Anschreiben,
  ROUTES_Anwalt_Fragen,
  ROUTES_Nachrichtenverlauf,
  ROUTES_Hilfe,
  ROUTES_Deine_Mitgliedschaft_Kostenlos
} from '../../constants';

export default function LayoutLogged() {
  const { Header, Content, Sider } = Layout;
  const history = useHistory();
  const layoutContext = useLayout();
  const { user, navigationSelected, onLogout } = layoutContext;

  function renderMenu() {
    return (
      <Menu theme="dark" mode="inline" selectedKeys={[navigationSelected]} style={{backgroundColor:"#208288"}}>
        <Menu.Item key={ROUTES_Willkommen()} onClick={() => history.push(ROUTES_Willkommen())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/video.png"
              className="menu-image"
            />
              <div className="menu-title">Willkommen</div>
          </div>
        </Menu.Item>
        <Menu.Item key={ROUTES_Renovierungs_Check()} onClick={() => history.push(ROUTES_Renovierungs_Check())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/check.png"
              className="menu-image"
            />
              <div className="menu-title">Renovierungs Check</div>
          </div>  
        </Menu.Item>
        <Menu.Item key={ROUTES_Checklisten()} onClick={() => history.push(ROUTES_Checklisten())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/checklisten.png"
              className="menu-image"
            />
              <div className="menu-title">Checklisten</div>
          </div>
        </Menu.Item>
        <Menu.Item key={ROUTES_Musterschreiben()} onClick={() => history.push(ROUTES_Musterschreiben())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/muster.png"
              className="menu-image"
            />
              <div className="menu-title">Musterschreiben</div>
          </div>
        </Menu.Item>
        <Menu.Item key={ROUTES_Vermieter_Anschreiben()} onClick={() => history.push(ROUTES_Vermieter_Anschreiben())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/send.png"
              className="menu-image"
            />
              <div className="menu-title">Vermieter Anschreiben</div>
          </div>
        </Menu.Item>
        <Menu.Item key={ROUTES_Anwalt_Fragen()} onClick={() => history.push(ROUTES_Anwalt_Fragen())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/message.png"
              className="menu-image"
            />
              <div className="menu-title">Anwalt Fragen</div>
          </div>
        </Menu.Item>
        <Menu.Item key={ROUTES_Nachrichtenverlauf()} onClick={() => history.push(ROUTES_Nachrichtenverlauf())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/nachrich.png"
              className="menu-image"
            />
              <div className="menu-title">Nachrichtenverlauf</div>
          </div>
        </Menu.Item>
        <Menu.Item key={ROUTES_Hilfe()} onClick={() => history.push(ROUTES_Hilfe())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/question.png"
              className="menu-image"
            />
              <div className="menu-title">Hilfe</div>
          </div>
        </Menu.Item>
        <Menu.Item key={ROUTES_Deine_Mitgliedschaft_Kostenlos()} onClick={() => history.push(ROUTES_Deine_Mitgliedschaft_Kostenlos())} className="menu-bottom-border">
          <div className="menu-item-content">
              <Image
              width={30}
              src="images/man.png"
              className="menu-image"
            />
              <div className="menu-title"><div>Deine Mitgliedschaft</div> <div>Kostenlos</div></div>
          </div>
        </Menu.Item>
      </Menu>
    );
  }

  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="300"
          zeroWidthTriggerStyle={{ top: 10, height: 47 }}
          onBreakpoint={(broken: any) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed: any, type: any) => {
            // console.log(collapsed, type);
          }}
          // style={{backgroundColor:"#208288",width:'300px'}}  `1W90
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            backgroundColor:"#208288",width:'300px'
          }}
        >
          <Link to="/" className="logo block px-3 py-2 text-white text-center">
            <div className="logo-content">
              <Image
              width={80}
              src="images/logo.png"
              className="mt-6"
            />
              <div className="logo-title">Mieter Engel</div>
            </div>
            <Image
              width={120}
              src="images/avatar.png"
              className="mt-6"
            />
            <div className="pl-4 pr-4">
            Jetzt <span className="bottom-border">Mitglied werden</span> und Partneranwalt freischalten
            </div> 
          </Link>
          {renderMenu()}
          <Link to="/logout" className="text-center">
            <div className="off-content">
                <Image
                width={30}
                src="images/off.png"
                className="mt-6"
              />
                <div className="off-title">Abmelden</div>
              </div>
          </Link>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0',marginLeft: '300px' }}>
            <div
              className="site-layout-background flex-1 max-w-full sm:p5"
            >
              <LoggedRoute />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
