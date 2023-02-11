function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "id",
      includedLanguages: "ar,en,es,jp,ko,pa,pt,ru,zh-CN",
      autoDisplay: true,
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    "google_translate_element"
  );
}
