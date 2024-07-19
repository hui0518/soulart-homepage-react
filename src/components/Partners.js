function Partner({ name, image }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
}

const partners = [
  {
    name: "Hololive",
    image: "/assets/partners/hololive.jpg",
  },
  {
    name: "idolm@ster",
    image: "/assets/partners/idolmaster.webp",
  },
  {
    name: "Kaist",
    image: "/assets/partners/kaist.jpg",
  },
  {
    name: "tesla",
    image: "/assets/partners/tesla.jpg",
  },
];

function Partners() {
  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      {partners.map(({ name, image }) => (
        <Partner name={name} image={image} />
      ))}
    </div>
  );
}

export default Partners;
