import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Species = ({ categories }) => {
  return (
    <section id="species">
      <h2>Çeşitlerimiz</h2>
      <ul className="species-list">
        {categories &&
          categories.map((category) => (
            <li key={category._id}>
              <figure>
                <img src={category.imgUrl} alt={category.name} />
              </figure>
              <div className="specie-description">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link href="/foods/[categoryId]" as={`/foods/${category._id}`}>
                  <a>
                    Menüye Git <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Species;
