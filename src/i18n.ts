import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const cookiesStore = cookies();
  const locales = ["pt-br", "en"];
  const getLocale = cookiesStore.get("LOCALE")?.value || locales[0];
  const locale = locales.includes(getLocale) ? getLocale : locales[0];

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
