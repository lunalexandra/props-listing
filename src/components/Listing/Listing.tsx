import { Item } from "../items/items"

interface ListingProps {
    items: Item[];
  }

const Listing: React.FC<ListingProps> = ({ items = []}) => {
    return (
      <>
        <div className="item-list">
          {items.map((item) => (
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage?.url_570xN} alt={item.title} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{getTitle(item.title)}</p>
                <p className="item-price">{getCurrencyCode(item.currency_code, item.price)}</p>
                <p className={`item-quantity level-${getQuantityLevel(item.quantity)}`}>
                  {item.quantity} left
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) return "low";
    if (quantity <= 20) return "medium";
    return "high";
  };


  const getTitle = (title: string) => {
    if(title && title.length > 50){
     return (title.slice(0, 50) + "...")
    }
    return title || ``
  }

  const getCurrencyCode = (code:string, price:string = "0") => {
    if(code === "EUR") return `€${price}`;
    if(code === "USD") return `$${price}`;
    return `${price} GBP `
  }
  
  export default Listing;
  