import { useTranslation } from "react-i18next";

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
    name: "hololive",
    image: "/assets/partners/hololive.jpg",
  },
  {
    name: "idolmaster",
    image: "/assets/partners/idolmaster.webp",
  },
  {
    name: "kaist",
    image: "/assets/partners/kaist.jpg",
  },
  {
    name: "tesla",
    image: "/assets/partners/tesla.jpg",
  },
];

function Partners() {
  const { t } = useTranslation();
  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      {partners.map(({ name, image }) => (
        <Partner name={t(`partners.${name}`)} image={image} key={name} />
      ))}
    </div>
  );
}

export default Partners;
