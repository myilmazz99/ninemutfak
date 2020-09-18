import Link from "next/link";

const Custom404 = () => {
  return (
    <section className="error-section">
      <img src="/404.svg" alt="404 icon" />
      <p>
        Aradığınız sayfayı bulamadık.{" "}
        <Link href="/">
          <a>Buradan anasayfa'ya dönebilirsiniz.</a>
        </Link>
      </p>

      <style jsx>
        {`
          .error-section {
            grid-column: 2/3;
            justify-self: center;
            width: 100%;
            max-width: 1200px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          img {
            display: block;
            max-width: 500px;
            height: auto;
          }

          p {
            margin-top: 2rem;
          }

          a {
            color: #b42018;
          }
        `}
      </style>
    </section>
  );
};

export default Custom404;
