import listIcon from "../assets/icon-list.svg";

const Sellingpoint = ({ text }) => {
  return (
    <li className="list-item">
      <img src={listIcon} alt="checkmark icon" />
      <p>{text}</p>
    </li>
  );
};

export default Sellingpoint;
