import React from "react";
import './timelineItemDetail.scss';

import iconView from './../../assets/img/icon-view.jpg';
import iconEdit from './../../assets/img/icon-edit.jpg';
import iconDownload from './../../assets/img/icon-download.jpg';


class TimelineItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.collapse = this.collapse.bind(this);
    }
    collapse(e) {
        this.setState({ open: !this.state.open })
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={require('./../../assets/img/icon-' + this.props.item.expenseTypeIcon + '.jpg')} alt="" />
                                <span className="item-date">{new Intl.DateTimeFormat("en-GB").format(this.props.item.invoiceDate)}</span>
                            </td>
                            <td>
                                <span className="item-title">TIPO</span>
                                <span className="item-detail">Aprovação da solicitação</span>
                                <span className="item-notes">{this.props.item.notes}</span>
                            </td>
                            <td>
                                <span className="item-title">VALOR</span>
                                <span className="item-detail">{this.props.item.currencyCode} {this.props.item.amountTotal}</span>
                                <span className="item-notes">Valor da nota: {this.props.item.currencyCode}{this.props.item.amountSpent}</span>
                            </td>
                            <td>
                                <span className="item-title">STATUS</span>
                                <div className={'item-status--' + this.props.item.status}><span>{this.props.item.status}</span></div>
                            </td>
                            <td>
                                <span className="item-options" onClick={(e) => this.collapse(e)}>
                                    <img src={iconView} alt='' />
                                    {this.state.open ? 'Fechar despesa' : 'Visualizar despesa'}</span>
                                <span className="item-options"><img src={iconEdit} alt='' />Editar</span>
                                <a href={this.props.item.resourceUrl} download className="item-options"><img src={iconDownload} alt='' />Baixar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {this.state.open ? (
                    <div className="img-detail" >
                        <img src={this.props.item.resourceUrl} alt='' />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default TimelineItemDetail;