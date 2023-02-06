import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import Image from 'next/image';
import  Layout from "./Layout.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faHouse, faEnvelopeOpen, faMagnifyingGlass, faFolder, faUserTie} from "@fortawesome/free-solid-svg-icons";
import EcellImage from '../../../assests/download.png';


export default function Header() {
    const collapseItems = [
        {title : "Home", icon : faHouse},
        {title : "Profile", icon : faUser},
        {title : "Applied", icon : faFolder},
        {title : "Messages", icon : faEnvelopeOpen},
        {title : "Jobs", icon : faUserTie},
        {title : "Discover", icon : faMagnifyingGlass},
    ];

    return (
        <Layout>
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <Image src={EcellImage} alt="eCellImage" width="90" height="50" />
                    {/* <Text b color="inherit" hideIn="xs">
                        E-Cell
                    </Text> */}
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="xs"
                    variant="highlight-rounded"
                >
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link isActive href="#">
                        Profile
                    </Navbar.Link>
                    <Navbar.Link href="#">Jobs</Navbar.Link>
                    <Navbar.Link href="#">Applied</Navbar.Link>
                    <Navbar.Link href="#">Messages</Navbar.Link>
                    <Navbar.Link href="#">Discover</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="secondary"
                                    size="md"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="secondary"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                             {/* <Dropdown.Item key="profile" css={{ height: "$18" }}>
                            </Dropdown.Item>  */}
                            <Dropdown.Item key="settings">
                                My Settings
                            </Dropdown.Item>
                            <Dropdown.Item key="help_and_feedback">
                                Help & Feedback
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" color="error">
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem
                            key={item.title}
                            activeColor="secondary"
                            // css={{
                            //     color: index === collapseItems.length - 1 ? "$error" : "",
                            // }}
                            // isActive={index === 0}
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                             <FontAwesomeIcon icon={item.icon} style={{marginRight:'10px', width: '25px'}}/> {item.title}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </Layout>
    );
}