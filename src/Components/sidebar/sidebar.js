import React, { useState, useEffect } from "react";
import axios from 'axios';

import iconArrowUp from './../../assets/img/icon-arrow-up.jpg';
import iconArrowDown from './../../assets/img/icon-arrow-down.jpg';

import './sidebar.scss';

function Sidebar() {

    const [sidebar, setSidebar] = useState(false);

    const getSidebar = async () => {
        axios.get('https://api-front-end-challenge.buildstaging.com/api/sidebar')
            .then(function (response) {
                setSidebar(response.data.content);
                console.log(response.data.content)
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getSidebar();
    }, [])

    if (sidebar === false) return null;

    return (
        <div className="sidebar">
            {
                sidebar.map((item, index) => (
                    <div className="sidebar__item" key={index}>
                        <div className={'status ' + item.accountabilityStatus}>
                            <h5>Status</h5>
                            <span>{item.accountabilityStatus}</span>
                        </div>

                        <div className="amount-approved">
                            <h5>VALOR A RECEBER</h5>
                            <span>{item.currency.symbol} {item.approved}</span>
                        </div>

                        <div className="balance">
                            <div>
                                <img src={iconArrowUp} alt='' />
                                <div>
                                    <span>Gastou</span>
                                    <span>{item.currency.symbol} {item.declared}</span>
                                </div>
                            </div>
                            <div>
                                <img src={iconArrowDown} alt='' />
                                <div>
                                    <span>Recebeu</span>
                                    <span>{item.currency.symbol} {item.received}</span>
                                </div>
                            </div>
                        </div>

                        <div className="statement">
                            <h5>Extrato</h5>

                            <table>
                                <tbody>
                                    <tr>
                                        <td className="title">Descrição</td>
                                        <td className="title">Valor</td>
                                    </tr>
                                    <tr>
                                        <td className="description">
                                            <span>Despesas declaradas</span>
                                            <span>Despesas declaradas pelo trooper</span>
                                        </td>
                                        <td className="amount">{item.currency.symbol} {item.declared}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar;