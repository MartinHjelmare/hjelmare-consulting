import feather from "feather-icons";

export default defineNuxtPlugin((nuxtApp) => {
  const replaceIcons = () => {
    feather.replace();
  };

  nuxtApp.hook("app:mounted", () => {
    replaceIcons();
  });

  nuxtApp.hook("page:finish", () => {
    replaceIcons();
  });
});
