import {Button} from "./Button.tsx";
import {useState} from "react";
import {AddItem as AddItemInput} from "./AddItem.tsx";

export const TodoList = ({title, status, number, changeStatus, id, addItem, saveNewTitle, removeData}) => {


    const [newTitle, setNewTitle] = useState(title);
    const [edit, setStatusEdit] = useState(false);

    const changeStatusHandler = () => {
        changeStatus(id, !status);
    }


    const changeStatusEditHandler = () => {
        setStatusEdit(true);
    }

    const saveData = () => {
        saveNewTitle(id, newTitle);
        setStatusEdit(!edit);
    }

    const removeDataHadler = () => {
        removeData(id);
    }
    return (
        <div className="items">
            <span>{number}.</span>
            {edit ? <input type={"text"} onChange={(e) => setNewTitle(e.target.value)} value={newTitle}/> : status ?
                <s>{title}</s> : <span>{title}</span>}
            <Button title={status ? "Mark as Pending" : "mark  as Done"} changeData={changeStatusHandler}/>
            {edit ? <Button title={"save"} changeData={saveData}/> :
                <Button title={"Edit"} changeData={changeStatusEditHandler}/>}
            <Button title={"Delete"} changeData={removeDataHadler}/>
        </div>
    )


}