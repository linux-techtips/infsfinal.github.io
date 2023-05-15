document.addEventListener("DOMContentLoaded", () => {
  const mainSectionMarkdown = `
#404 Work Not Found
<iframe src="https://giphy.com/embed/5Zesu5VPNGJlm" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/5Zesu5VPNGJlm"></a></p>
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
