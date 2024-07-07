import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Calendar, Form} from "antd";
import ModalByAddEvents from "./modalByAddEvents";
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import {calendarEventsActions} from "../../redux/actions/calendarEventsActions";
import axios from "axios";

const getListData = (value, calendarEvents) => {
    let listData = calendarEvents.filter(elem =>
        value.date() === Number(elem.date.substr(0, 2)));
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const CalendarEvents = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const selectedCellValue = useRef(null);
    const [form] = Form.useForm();

    const calendarEvents = useSelector(state => state.calendarReducer.calendarEvents);

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value, calendarEvents);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item._id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    const getCalendarEvents = useCallback(async () => {
        try {
            const response = await axios.get("/api/calendar/calendar-events", {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            dispatch(calendarEventsActions.addCalendarEvent(response.data));
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        getCalendarEvents();
    }, [getCalendarEvents]);

    const handleSelect = (value, selectInfo) => {
        setIsModalOpen(true);
        selectedCellValue.current = {...value, ...selectInfo};
    }

    const onAddEvent = async value => {
        dispatch(calendarEventsActions.getCalendarEvent())
        const {$D, $H, $M} = selectedCellValue.current;
        const date = moment().date($D).hour($H).minute($M).second(0).millisecond(0);
        const newSelectedCellValue = {
            date: date.format('DD/MM/YYYY'),
            ...value,
        }
        try {
            await axios.post("/api/calendar/calendar-events", newSelectedCellValue, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                dispatch(calendarEventsActions
                    .addOneCalendarEvent(response.data));
            });
            form.resetFields();
        } catch (error) {
            console.log(error);
        }
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        selectedCellValue.current = null;
    };

    return (
        <>
            <ModalByAddEvents
                form={form}
                isModalOpen={isModalOpen}
                onAddEvent={onAddEvent}
                handleCancel={handleCancel}
            />
            <Calendar
                cellRender={cellRender}
                onSelect={handleSelect}
            />
        </>
    );
};

export default CalendarEvents;