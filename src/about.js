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

Orlando J. Gomez is a cyber security aficionado, profoundly immersed in the field
and deeply involved in a prominent cyber security club. He is committed to promoting
a culture of security awareness, leveraging his leadership role to share knowledge and
encourage peers to explore the rapidly evolving landscape of digital security. With a
firm belief in collaborative learning, Orlando continues to drive efforts in defending
against emerging cyber threats.

<br>

##About Amadeus

![Amadeus](../static/amadeus.jpg)

I am a computer engineering and cyber security with a minor in Asian studies student at
UTRGV. I got my associates in 2018 from South Texas College, this program gave me the GPA
to get a scholarship to pay for UTRGV, thus allowing me to complete my bachelor's. My passion
is cyber security. However, this was not available to me until 2023 I have completed everything
for my degree in computer engineering, and I hope to find an engaging career in cyber security
in the near future.

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
