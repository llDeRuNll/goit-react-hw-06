import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={styles.containerContacts}>
      <ul className={styles.contactsInfo}>
        <li>
          <div>
            <IoMdPerson />
            {name}
          </div>
        </li>
        <li>
          <a href={`tel:${number}`}>
            <MdLocalPhone />
            {number}
          </a>
        </li>
      </ul>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
