import { useState } from "react";
import country from "../../pages/api/countries";
import Country from "../types/country";

export default function Countries(props: string) {
  const [name, setcountry] = useState<Country>();

	const countryhandler = async (name: string)=>{
    const response = await country(name);
    const contries = response.map((data: any) => {
      setcountry(data)
    });
    return contries;
	}

	return(
		<h1>Hola</h1>
	)
}
