import React, { useState, useEffect } from "react";
import axios from 'axios';

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
        <div className="timeline">
            {
                timeline.map((item) => {
                    return (
                        <table key={item.id}>
                            <tbody> 
                                <tr>
                                    <td></td>
                                    <td>TIPO</td>
                                    <td>VALOR</td>
                                    <td>OBSERVAÇÃO</td>
                                    <td>STATUS</td>
                                </tr>
                                <tr>
                                    <td>
                                        {new Intl.DateTimeFormat("en-GB").format(item.cardDate)}
                                    </td>
                                    <td></td>
                                    <td>{item.currencySymbol} {item.amountTotal}</td>
                                    <td>{item.notes}</td>
                                    <td>{item.status}</td>
                                </tr>
                            </tbody>
                    </table>
                    ) 
                })
            }

        </div>
    );
}

export default Timeline;