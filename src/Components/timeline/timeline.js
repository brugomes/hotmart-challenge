import React, { useState, useEffect } from "react";
import axios from 'axios';
import './timeline.scss';
import TimelineItemDetail from './timelineItemDetail';

function Timeline() {
    
    const [timeline, setTimeline] = useState(false);

    const getTimeline = async () => {
        axios.get('https://api-front-end-challenge.buildstaging.com/api/timeline')
            .then(function (response) {
                setTimeline(response.data.content);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getTimeline();
    }, [])

    if (timeline === false) return null;

    return (
        <div className="timeline-container">
            {   
                timeline.map(item => item.expenseId !== undefined ?
                    <div className="timeline-container__item" key={item.id}>
                        <TimelineItemDetail item={item} />
                    </div>
                    : null
                )
            }
        </div>
    );
}

export default Timeline;