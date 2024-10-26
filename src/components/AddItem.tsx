export const AddItem = ({addItem, value, handleKeyDown}) => {
    return (
        <input value={value} type="text" placeholder={"type text and press enter"} onChange={addItem}
               onKeyDown={handleKeyDown}/>

    )
}