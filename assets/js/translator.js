function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "id",
      includedLanguages: "id,ar,en,es,ja,ko,pa,pt,ru,zh-CN",
      autoDisplay: true,
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    "google_translate_element"
  );
}
