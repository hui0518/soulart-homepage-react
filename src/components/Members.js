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
    name: "Uzuki Shimamura",
    image: "/assets/members/uzuki.webp",
  },
  {
    name: "Rin Shibuya",
    image: "/assets/members/rin.webp",
  },
  {
    name: "Mio Honda",
    image: "/assets/members/mio.webp",
  },
  {
    name: "Ikuyo Kita",
    image: "/assets/members/ikuyo.webp",
  },
];

function Members() {
  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      {members.map(({ name, image }) => (
        <Member name={name} image={image} />
      ))}
    </div>
  );
}

export default Members;
