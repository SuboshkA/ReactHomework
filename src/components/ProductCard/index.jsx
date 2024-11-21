import "./index.css";

export function ProductCard(props){
    const {image, category, title, price}= props.data;

    return(
        <div className='product-card'>
            <div className="iBLock">
                <img className="i" width="200" src={image} alt="" />
            </div>
            <div className="c">{category}</div>
            <h4 className="h">{title}</h4>
            <div className="Card">
                <div className="p">${price}</div>
                <button className="b">Add to card</button>
            </div>
        </div>
    )
}