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
        <kbd><IconCommand/></kbd> + <kbd>K</kbd>
      </div>
    </div>
  );
};

export default Search;
