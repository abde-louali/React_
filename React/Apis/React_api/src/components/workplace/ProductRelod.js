import { useParams } from "react-router-dom";
import Product from "./Product";
export function Productreload() {
    const { id, category } = useParams();
    return <Product key={`${id}-${category}`} />;
  }