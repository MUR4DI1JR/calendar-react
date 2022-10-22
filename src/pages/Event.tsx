import React, {FC, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventFrom from "../components/EventFrom";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Layout>
            <EventCalendar events={[]}/>
            <Row justify="center">
                <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
                title="Добавить событие!"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventFrom/>
            </Modal>
        </Layout>
    );
};

export default Event;