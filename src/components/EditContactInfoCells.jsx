import './EditContactInfoCells.css';

const EditFirstNameCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
        <div>
            <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}

const EditLastNameCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
        <div>
            <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}

const EditAddressCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
        <div>
            <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}

const EditCityCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
        <div>
            <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}

const EditStateCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
        <div>
            <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}

const EditZipcodeCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
        <div>
            <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}

const EditEmailCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
        <div>
            <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}


export default {EditFirstNameCell, EditLastNameCell, EditAddressCell, EditCityCell, EditStateCell, EditZipcodeCell,EditEmailCell}