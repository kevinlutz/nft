import NavButton from "./NavButton";

function Navbar() {
  return (
    <>
      <img src="NFTlogo.png" alt="NFT logo"></img>
      <NavButton topic="About" />
      <NavButton topic="Collection" />
      <NavButton topic="Contact" />
    </>
  );
}
export default Navbar;
