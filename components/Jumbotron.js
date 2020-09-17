const Jumbotron = () => {
  return (
    <section className="jumbotron">
      <div>
        <h1>Ni & Ne Mutfak'a Hoşgeldiniz.</h1>
      </div>
      <video autoPlay={true} loop={true} muted={true}>
        <source src="/jumbotron-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Jumbotron;
