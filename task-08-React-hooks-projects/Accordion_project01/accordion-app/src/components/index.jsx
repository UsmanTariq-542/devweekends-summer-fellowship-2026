import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion(){
    const [selected, setSelected] = useState(null);

    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId == selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple]; // deep copy of the array using spread operator
        
        const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);

        if(findIndexofCurrentId === -1){
            cpyMultiple.push(getCurrentId);
        }
        else{
            cpyMultiple.splice(findIndexofCurrentId, 1);
        }

        setMultiple(cpyMultiple);
    }


    return (
        <div className="wrapper">
            <button onClick={()=> setEnableMultiSelect(!enableMultiSelect)}>
                Enable Multi selection
            </button>
            <div className="accordion">{
                data && data.length > 0 ? 
                data.map(dataitem=> 
                <div className="item" key={dataitem.id}>
                    <div onClick={enableMultiSelect
                        ? ()=> handleMultiSelection(dataitem.id) 
                        : ()=> handleSingleSelection(dataitem.id)
                    } 
                    className="title" >
                        <h3>{dataitem.question}</h3>
                        <span>+</span>

                    </div>
                    {
                        enableMultiSelect? 
                        multiple.indexOf(dataitem.id)!==-1  && 
                        <div className="content">{dataitem.answer}</div>:
                        selected === dataitem.id && 
                        <div className="content">{dataitem.answer}</div>
                    }

                </div>
                )
                : <div> No data found!</div>
            }
            </div>
        </div>
    );

}