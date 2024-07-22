import React, {useCallback, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {resourceActions} from "../../redux/actions/resourceActions";
import {useDispatch, useSelector} from "react-redux";
import {Tag} from "antd";

const Resource = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { resource } = useSelector(state => state.resourceReducer);

    const getResource = useCallback( async () => {
        try {
            dispatch(resourceActions.getResourceRequest());
            await axios.get(`/api/resources/resource/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response =>
                dispatch(resourceActions.getResourceSuccess(response.data[0]))
            );
        } catch (error) {
            console.log(error)
        }
    },[dispatch, id]);

    useEffect(() => {
        getResource();
    }, [getResource]);

    return (
        <div>
            <h1>{resource._id}</h1>
            <h1>{resource.name}</h1>
            <h1>{resource.address}</h1>
            <h1>{resource.age}</h1>
            <h1>{resource.facebookLink}</h1>
            <h1>{resource.engLevel}</h1>
            <h1>{resource.techLevel}</h1>
            <h1>{resource.location}</h1>
            <h1>{resource.projects}</h1>
            <h1>{resource.remote
                ? (<Tag color={'green'}>true</Tag>)
                : (<Tag color={'red'}>false</Tag>)}
            </h1>
        </div>
    );
};

export default Resource;