import kittydata from "./kittydata";

function CryptoKittyDetails(props) {
  const { cryptoName, cryptoType, artist, collection, image } = props;
  return (
    <>
      <span>{cryptoName}</span>
      <span>{cryptoType}</span>
      <span>{artist}</span>
      <span>{collection}</span>
      <span>{image}</span>
    </>
  );
}
export default CryptoKittyDetails;
