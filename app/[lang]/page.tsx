import { useTranslations } from "next-intl";

export default async function IndexPage() {
  const t = useTranslations("Index");

  return <h1>{t("title")}</h1>;
}
