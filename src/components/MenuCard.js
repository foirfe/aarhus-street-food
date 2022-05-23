export default function MenuCard({menuItem}){

    return (
        <div>
<h1>{menuItem.name}</h1>
<img src={menuItem.image_url} alt={menuItem.name} />
<p>{menuItem.price}kr</p>
        </div>
    )
}