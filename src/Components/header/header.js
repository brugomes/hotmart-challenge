import React, { useState, useEffect } from "react";
import axios from 'axios';
import './header.scss';

function Header() {
    const [header, setHeader] = useState(false);

    const getHeader = async () => {
        axios.get('https://api-front-end-challenge.buildstaging.com/api/header')
            .then(function (response) {
                setHeader(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getHeader();
    }, [])

    if (header === false) return null;

    return (
        <div className="header-container">

            <h2>{header.title} #{header.id}</h2>

            <div className="header-container__content">
                <table>
                    <tbody>
                        <tr>
                            <td>Nome</td>
                            <td>{header.collaborator.name}</td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>{header.collaborator.email}</td>
                        </tr>
                        <tr>
                            <td>Justificativa</td>
                            <td>{header.justification}</td>
                        </tr>
                        <tr>
                            <td>Finalidade</td>
                            <td>{header.purpose}</td>
                        </tr>
                        <tr>
                            <td>Projeto</td>
                            <td>{header.project.title}</td>
                        </tr>
                        <tr>
                            <td>Data</td>
                            <td>{new Intl.DateTimeFormat("en-GB").format(header.createdOn)}</td>
                        </tr>
                        <tr>
                            <td>Quantidade</td>
                            <td>{header.accountabilityExtraInfo.amountOfPeople} 
                                {header.accountabilityExtraInfo.amountOfPeople === 1 ? ' pessoa' : ' pessoas'}
                            </td>
                        </tr>
                        <tr>
                            <td>Inclui café <br/> da manhã</td>
                            <td>{header.accountabilityExtraInfo.amountOfPeople === null ? ' Não' : ' Sim'}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="header-container__content--cost-analysis">
                    <form>
                        <label>Atribuir analista:</label>
                        <input type='text' id="analyst" placeholder="Atribuir analista"></input>
                    </form>

                    <span>Centro de Custo</span>
                    <span>{header.costCenters[0].percentage}% - {header.costCenters[0].name} </span>
                </div>
            </div>
        </div>
    );
}

export default Header;