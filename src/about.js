document.addEventListener("DOMContentLoaded", () => {
  const mainSectionMarkdown = `
##About Carter

![Carter](../static/carter.png)

Carter Vavra is a dedicated computer science enthusiast with a deep interest in
low-level programming and cyber security. He has a passion for understanding the
intricate workings of systems, constantly exploring the layers of hardware and
software to fortify security measures. With a knack for problem-solving and a
constant thirst for knowledge, Carter aims to contribute to a safer digital world.

<br>

##About Orlando

![Orlando](../static/orlando.png)
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
