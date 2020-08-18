const Services = () => {
  return (
    <section id="services">
      <ul className="services-list">
        <li className="services-item">
          <figure>
            <img
              src="https://ik.imagekit.io/i6jr6aixj7/ninemutfak/clientFriendly_TYdTlv_u0UC.svg"
              alt=""
            />
          </figure>
          <div className="service-description">
            <h3>Müşteri Odaklı</h3>
            <p>
              Yaptığımız her yemekle müşterilerimizi memnun görmek istiyoruz.
            </p>
          </div>
        </li>
        <li className="services-item">
          <figure>
            <img
              src="https://ik.imagekit.io/i6jr6aixj7/ninemutfak/customerOriented_bshEo0Z89.svg"
              alt=""
            />
          </figure>
          <div className="service-description">
            <h3>Kişiye özel sipariş</h3>
            <p>
              Siparişleriniz tabldot usulu değil, sizin isteğinize göre
              pişmektedir.
            </p>
          </div>
        </li>
        <li className="services-item">
          <figure>
            <img
              src="https://ik.imagekit.io/i6jr6aixj7/ninemutfak/healthy_I8qGtguc3X6W.svg"
              alt=""
            />
          </figure>
          <div className="service-description">
            <h3>Hijyen ve Sağlık</h3>
            <p>
              Ev Hanımları olarak yılları aşkın tecrübemizle yemeklerimizi
              hijyen ve sağlık içinde hazırlıyoruz.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
