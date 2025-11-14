import { getRequestConfig } from "next-intl/server";
import { i18nConfig } from "./config";

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || i18nConfig.defaultLocale;
  const { messages } = await import(`./messages`);
  return {
    locale: validLocale,
    messages: messages[validLocale as keyof typeof messages],
  };
});




