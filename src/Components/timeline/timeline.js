import React, { useState, useEffect } from "react";
import axios from 'axios';
import './timeline.scss';
import logo from './../../assets/img/status.png';
import iconView from './../../assets/img/icon-view.jpg';
import iconEdit from './../../assets/img/icon-edit.jpg';
import iconDownload from './../../assets/img/icon-download.jpg';

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
                    <div className="timeline-container__item" key={item.id} id={item.id}>
                        <table>
                            <tbody> 
                                <tr>
                                    <td>
                                        <img src={require('./../../assets/img/icon-' + item.expenseTypeIcon + '.jpg')} alt="" />    
                                        <span className="item-date">{new Intl.DateTimeFormat("en-GB").format(item.invoiceDate)}</span> 
                                    </td>
                                    <td>
                                        <span className="item-title">TIPO</span>
                                        <span className="item-detail">Aprovação da solicitação</span>
                                        <span className="item-notes">{item.notes}</span>
                                    </td>
                                    <td>
                                        <span className="item-title">VALOR</span>
                                        <span className="item-detail">{item.currencyCode} {item.amountTotal}</span>
                                        <span className="item-notes">Valor da nota: {item.currencyCode}{item.amountSpent}</span>
                                    </td>
                                    <td>
                                        <span className="item-title">STATUS</span>
                                        <div className={'item-status--' + item.status}><span>{item.status}</span></div>
                                    </td>
                                    <td>
                                        <span className="item-options"><img src={iconView} alt=''/>Visualizar</span>
                                        <span className="item-options"><img src={iconEdit} alt=''/>Editar</span>
                                        <span className="item-options"><img src={iconDownload} alt=''/>Baixar</span>
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