import {useState} from "react";
import {TodoList} from "./components/TodoList.tsx";
import {AddItem as AddItemInput} from "./components/AddItem.tsx";
import mockItems from './__mocks__/Items.ts'
import {ItemsType} from "./utils/types.ts";

function App() {

    const [item, setAddItem] = useState("");
    const [items, setItems] = useState<ItemsType[]>(mockItems);


    const changeStatus = (id: number, status: boolean) => {
        const newItems = items.map((item) => (
            item.id === id ? {...item, status} : item
        ))
        setItems(newItems);
    }

    const addItem = (e) => {

        setAddItem(e.target.value);
        // console.log(title);
    }

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {
            setItems([...items, {title: item, id: items.length + 1, status: false}]);
            setAddItem("");
        }
    }


    const saveNewTitle = (id: number, newTitle: string) => {
        const newItems = items.map((item) => (
            item.id === id ? {...item, title: newTitle} : item
        ))
        setItems(newItems);
    }


    const removeData = (id) => {
        const newItems = items.filter((item) => (
            item.id !== id
        ))
        setItems(newItems);
    }


    const fetchData = () => {
        return items.map((item, key) => (
            <TodoList key={item.id} {...item} number={key + 1} saveNewTitle={saveNewTitle} changeStatus={changeStatus} removeData={removeData}/>
        ))
    }


    return (
        <div>
            <h1>Todo List</h1>
            <div className="row">
                <AddItemInput addItem={addItem} value={item} handleKeyDown={handleKeyDown}/>
            </div>
            <div className="row">
                {fetchData()}
            </div>

        </div>
    )
}

export default App
