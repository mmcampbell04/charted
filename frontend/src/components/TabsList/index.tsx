import { Link } from "react-router-dom";

const navigation = [
  { name: "Library", href: "library" },
  { name: "Projects", href: "projects" },
  { name: "Tools", href: "tools" },
];

export const TabsList = () => {
  return (
    <ul>
      {navigation.map((item) => {
        return (
          <li key={item.name}>
            <Link to={`/dashboard/${item.href}`}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
