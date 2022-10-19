import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const history = useHistory();
    const {auth} = useTypedSelector(state => state.auth);

    return (
        <Layout.Header>
            <Row justify="end">
                {
                    auth ?
                        <>
                            <div style={{color: "white"}}>Muradil</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    onClick={() => console.log("user logout")}
                                    key={1}>
                                    Logout
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => history.push(RouteNames.LOGIN)}
                                key={1}>
                                Login
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;