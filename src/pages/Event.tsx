import React, {FC} from 'react';
import {Layout} from "antd";
import EventCalendar from "../components/EventCalendar";

const Event: FC = () => {
    return (
        <Layout>
            <EventCalendar events={[]}/>
        </Layout>
    );
};

export default Event;