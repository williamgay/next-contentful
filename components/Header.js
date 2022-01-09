import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>My</span> Blog
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with something or another....
      </p>
    </div>
  );
};

export default Header;
