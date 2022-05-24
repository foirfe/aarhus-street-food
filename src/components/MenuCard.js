export default function MenuCard({menuItem}){

    return (
        <div className="menucard">
<h3>{menuItem.name}</h3>
<img src={menuItem.image_url} alt={menuItem.name} />
<p>{menuItem.price} kr</p>
        </div>
    )
}