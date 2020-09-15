import React from "react";

import './timelineItemDetail.scss';

function TimelineItemDetail(props){
    return (
        <div>
            <div className="img-detail">
                <img src={props.imgUrl} alt='' />
            </div>
        </div>
    )
}

export default TimelineItemDetail;