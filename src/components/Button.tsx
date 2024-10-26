

export const Button=({title,changeData})=>{
    return (
        <button onClick={changeData}>
            {title}
        </button>
    )
}