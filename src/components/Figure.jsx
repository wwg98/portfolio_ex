function Figure({ url, desc }) {
  return (
    <figure>
      <img alt={`${desc}img`} src={url} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}

export default Figure;
