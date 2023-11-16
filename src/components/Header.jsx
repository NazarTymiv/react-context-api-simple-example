import { useContext } from "react";
import { NewContext } from "../App";

export default function Header() {
    const { appName } = useContext(NewContext);

    return <h1>{appName}</h1>;
}
