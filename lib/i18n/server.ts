import { getRequestConfig } from "next-intl/server";
import { i18nConfig } from "./config";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./messages`)).default[locale as keyof typeof i18nConfig.locales],
  };
});




