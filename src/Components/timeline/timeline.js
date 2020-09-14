import React, { useState, useEffect } from "react";
import axios from 'axios';
import './timeline.scss';
import logo from './../../assets/img/status.png';

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
                        <table>
                            <tbody> 
                                <tr>
                                    <td>
                                        <img src={logo} alt="Logo" /><br/>
                                        {new Intl.DateTimeFormat("en-GB").format(item.invoiceDate)}
                                    </td>
                                    <td>
                                        <span className="item-title">TIPO</span>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span className="item-title">VALOR</span>
                                        {item.currencySymbol} {item.amountTotal}
                                    </td>
                                    <td>
                                        <span className="item-title">OBSERVAÇÃO</span>
                                        {item.notes}
                                    </td>
                                    <td>
                                        <span className="item-title">STATUS</span>
                                        {item.status}
                                    </td>
                                    <td>
                                        <span>Ver nota fiscal</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 

                        <TimelineItemDetail imgUrl={item.resourceUrl} />
                    </div>
                    : null
                )
            }
        </div>
    );
}

export default Timeline;