
import classes from './../Meals/MealItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          Inc - Dec
        </div>
      </li>
    );
  };
  
  export default CartItem;