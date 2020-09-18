import React from "react";
import { useForm } from "react-hook-form";

import './timelineItemForm.scss';

function TimelineItemForm(props){

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log("Submiting data " + data)
    }

    return (
        <div className="timeline-item-form">
            <h2>Editar despesa</h2>

            <div>
                <div>
                    <h4>Envie o comprovante</h4>
                    <button>Escolher despesa</button>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Tipo *</label>
                        <input type="text" name="type" defaultValue="Aprovação da solicitação" ref={register} />
                    </div>
                    
                    <div>
                        <label>Moeda *</label>
                        <input type="text" name="currencyCode" defaultValue={props.data.currencyCode} ref={register} />
                    </div>
                    
                    <div>
                        <label>Descrição da despesa *</label>
                        <input type="text" name="notes" defaultValue={props.data.notes} ref={register} />
                    </div>
                    
                    <div>
                        <label>Data do comprovante *</label>
                        <input type="text" name="invoiceDate" defaultValue={new Intl.DateTimeFormat("en-GB").format(props.data.invoiceDate)} ref={register} />
                    </div>
                    
                    <button type="submit" className="btn-save">Salvar</button>
                </form>   
            </div>
        </div>
    )
}

export default TimelineItemForm;