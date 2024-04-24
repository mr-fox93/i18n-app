import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function LandingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <p>{dictionary["server-component"].landing}</p>
      <p>Current: {lang}</p>
      <p>
        Tutaj możesz umieścić dowolną zawartość, która ma się wyświetlać na tej
        stronie.
      </p>
    </div>
  );
}
