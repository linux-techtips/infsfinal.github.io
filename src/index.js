document.addEventListener("DOMContentLoaded", () => {
  const mainSectionMarkdown = `
`;

  const sidebarFirstMarkdown = `
`;

  const sidebarSecondMarkdown = `
`;

  const sidebarThirdMarkdown = `
`;

  const converter = new showdown.Converter();
  const mainSectionHtml = converter.makeHtml(mainSectionMarkdown);
  document.getElementById("main-section-content").innerHTML = mainSectionHtml;

  const sidebarFirstHtml = converter.makeHtml(sidebarFirstMarkdown);
  document.getElementById("sidebar-first").innerHTML = sidebarFirstHtml;

  const sidebarSecondHtml = converter.makeHtml(sidebarSecondMarkdown);
  document.getElementById("sidebar-second").innerHTML = sidebarSecondHtml;

  const sidebarThirdHtml = converter.makeHtml(sidebarThirdMarkdown);
  document.getElementById("sidebar-third").innerHTML = sidebarThirdHtml;
});
