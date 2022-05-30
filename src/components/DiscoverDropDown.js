import Multiselect from 'multiselect-react-dropdown';

const dropdown = {
    options: [{
        name: 'Laktosefri', id:1, value: "laktose"
    },{
        name: 'Glutenfri', id:2, value: "gluten"
    },
    {name: 'Nøddefri', id:3, value: "nuts"}]
    }

   
 
export default function DiscoverDropDown(){


function onSelect(selectedList, selectedItem){
    localStorage.setItem(selectedItem.value, true);

}
function onRemove(selectedList,selectedItem){
    localStorage.removeItem(selectedItem.value)
}


return(
    <div>
        <Multiselect
        options={dropdown.options}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
        avoidHighlightFirstOption={true}
        placeholder="Allergi?"
         />
    </div>
)
}