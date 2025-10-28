import classNames from "classnames";
import { FolderOpen, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

const navigation = [
  { name: "Dashboard", href: "/dashboard", protected: true, icon: "user" },
  { name: "Projects", href: "/projects", protected: true, icon: "folder" },
];

const Icons = {
  user: <User />,
  folder: <FolderOpen />,
};

export const Nav = () => {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <ul>
        {navigation.map((item) => {
          return (
            <li key={item.name}>
              <Link
                to={item.href}
                className={classNames(styles.navItem, {
                  [styles.active]: location.pathname === item.href,
                })}
              >
                {Icons[item.icon as keyof typeof Icons]}
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
