import CryptoKittyDetails from "./CryptoKittyDetails";
import CryptoForm from "./CryptoForm";

function CryptoCard({ kittydata }) {
  const kittyDetails = kittydata.map((kitty) => {
    <CryptoKittyDetails
      cryptoName={kitty.cryptoName}
      cryptoType={kitty.cryptoType}
      artist={kitty.artist}
      collection={kitty.collection}
      image={kitty.image}
    />;
  });

  return (
    <>
      <CryptoKittyDetails />
      <CryptoForm />
    </>
  );
}

export default CryptoCard;
