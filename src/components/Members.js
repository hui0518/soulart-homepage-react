import { useTranslation } from "react-i18next";

function Member({ name, image }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          style={{
            width: "200px",
            height: "300px",
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

const members = [
  {
    name: "uzuki",
    image: "/assets/members/uzuki.webp",
  },
  {
    name: "rin",
    image: "/assets/members/rin.webp",
  },
  {
    name: "mio",
    image: "/assets/members/mio.webp",
  },
  {
    name: "ikuyo",
    image: "/assets/members/ikuyo.webp",
  },
];

function Members() {
  const { t } = useTranslation();
  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      {members.map(({ name, image }) => (
        <Member name={t(`members.${name}`)} image={image} key={name} />
      ))}
    </div>
  );
}

export default Members;
