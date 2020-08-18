import currencyFormat from "../tools/currencyFormat";

const FoodModal = ({ food }) => {
  return (
    <section className="food-modal">
      <img src={food.imgUrl} className="modal-img" />
      <div className="modal-description">
        <h3>{food.name}</h3>
        <h5>İçerikler</h5>
        <p dangerouslySetInnerHTML={{ __html: food.ingredients }}></p>
        <h5>Fiyat</h5>
        <p>
          {currencyFormat(food.price) + " "}/<small>Kg</small>
        </p>
      </div>
    </section>
  );
};

export default FoodModal;
