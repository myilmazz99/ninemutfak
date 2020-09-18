import { toggleModal, Modal } from "../../../components/common/Modal";
import FoodModal from "../../../components/menu/FoodModal";
import Head from "next/head";
import dbConnect from "../../../utils/dbConnect";
import { ObjectId } from "mongodb";

export default function Index({ foods }) {
  return (
    <>
      <Head>
        <title>Ni & Ne Mutfak - {foods[0].category[0].name}</title>
      </Head>
      <section id="menu-page">
        <section className="menu">
          <figure className="menu-logo">
            <img
              src="https://ik.imagekit.io/i6jr6aixj7/ninemutfak/menulogo_Cok56-i59.png"
              alt="menu caption"
            />
            <figcaption>
              <h1>{foods[0].category[0].name}</h1>
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
  const { db } = await dbConnect();
  const foods = await db
    .collection("foods")
    .aggregate([
      {
        $match: { categoryId: ObjectId(params.categoryId) },
      },
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "category",
        },
      },
    ])
    .toArray();

  return {
    props: {
      foods: JSON.parse(JSON.stringify(foods)),
    },
  };
}

export async function getStaticPaths() {
  const { db } = await dbConnect();
  const categories = await db.collection("categories").find({}).toArray();
  const paths = JSON.parse(JSON.stringify(categories)).map((i) => ({
    params: { categoryId: i._id },
  }));

  return { paths, fallback: false };
}
