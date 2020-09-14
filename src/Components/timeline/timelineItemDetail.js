import React from "react";

import './timelineItemDetail.scss';

function TimelineItemDetail(props){
    return (
        <div>
            <div className="item-detail">
                <img src={props.imgUrl} alt='' />
            </div>

            <span>baixar</span>
        </div>
    )
}

export default TimelineItemDetail;