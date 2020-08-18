import { toggleModal, Modal } from "../../../components/common/Modal";
import FoodModal from "../../../components/menu/FoodModal";
import Head from "next/head";

export default function Index({ foods }) {
  return (
    <>
      <Head>
        <title>Ni & Ne Mutfak - {foods[0].categoryId.name}</title>
      </Head>
      <section id="menu-page">
        <section className="menu">
          <figure className="menu-logo">
            <img
              src="https://ik.imagekit.io/i6jr6aixj7/ninemutfak/menulogo_Cok56-i59.png"
              alt="menu caption"
            />
            <figcaption>
              <h1>{foods[0].categoryId.name}</h1>
            </figcaption>
          </figure>
          <ul>
            {foods.map((food) => (
              <li key={food._id} onClick={() => toggleModal(food._id)}>
                <figure>
                  <img src={food.imgUrl} alt="" />
                </figure>
                <h2>{food.name}</h2>
                <Modal
                  onClose={() => toggleModal(food._id)}
                  modalName={"m" + food._id}
                  data={<FoodModal food={food} />}
                />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/foods/category/${params.categoryId}`
  );
  const { data } = await res.json();
  return {
    props: {
      foods: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/categories");
  const categories = await res.json();

  const paths = categories.data.map((i) => ({
    params: { categoryId: i._id },
  }));

  return { paths, fallback: false };
}
