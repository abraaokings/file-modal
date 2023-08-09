import IconSearch from "../assets/images/IconSearch";
import IconCommand from "../assets/images/IconCommand";

const Search = () => {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <IconSearch />
        <input type="text" placeholder="Search or type a command" />
      </div>
      <div className="input-command">
        <IconCommand />
        <span>/ K</span>
      </div>
    </div>
  );
};

export default Search;
