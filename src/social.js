document.addEventListener("DOMContentLoaded", () => {
  const mainSectionMarkdown = `
Politics- 
 

Intro: The world surrounding cybersecurity and its involvement in politics has evolved and grown, especially more recently, with congressional hearings and state bans on TikTok being the most widely known issues to date, not including the air of mystery regarding certain elections, and our state rivals of the world being China and Russia. One cannot speak on the sustainability of Cybersecurity without discussing modern day politics.  With the evolution of cyber security and it's involvement with our everyday lives we begin to see it's expanding nature.  for the more technological a society becomes the more vulnerable it is to a flaw within its programming thus as we continue to expand forward we must always take that first step into understanding that this will be a risk to be taken when expanding the frontiers of Technology. 

China: China as a threat in the realm of cyber security, has been known for many years is associated with many underground hacking organizations such as apt-10 or apt 1 believed to be associated with the Chinese military these groups have targeted everything from governments, defense contractors, Industry leaders, and infrastructure. These Chinese hackers have had every motive from stealing intellectual property, gaining access to proprietary information, and trade secrets, and Causing disruption within rival countries' economic systems and political systems. China also operates a large firewall and internet control system to prevent outside information from getting into their country China is quite often associated with North Korea and its hacking groups which it can use to great effect given the plausible deniability given with any actions committed by The Hermit Kingdom. 

Huawai: Huawei is a Chinese telecommunication company and it has been in the center of quite a few political and cyber security debates in recent years geopolitically, Huawei's close ties to the Chinese government has raised quite a large amount of concerns, especially with the United States NATO and its allies including and but not limited to allies found in the South China Sea and even those not found to be normally aligned with United States and its interest. most of these stem from the Chinese National Security Law, which requires Chinese companies to cooperate with intelligence efforts if required and the fear is that it has already been used, and it has been found places that have gotten their entire 5G infrastructure updated by Huawei have found malware and back doors that lead to the Chinese government more specifically Papua New Guinea and the Solomon Islands. Huawei was a major developer of 5G in the United States up until it banning along with all of its devices on US Networks due to the potential cyber security risks from these devices. This specific instance actually led to an industry-wide look into the suppliers of telecommunications devices and other technology that is so commonly used, especially in the semiconductor world, and how they can actually be used to interfere with and steal intellectual property from companies who use this equipment. 

 
 2020 US ELECTION: The 2020 elections were considered one of the most volatile elections since the Civil War. However, beneath all the politics and mudslinging, there were actual cyber security concerns. these concerns range from foreign interference, disinformation and misinformation, fishing and hacking attempts, election infrastructure attacks, and ransomware threats. With the United States' two largest rivals, China and Russia, followed closely by Iran and North Korea all with vested interests in the outcome of the US election, these nation-state actors began using this information dissemination campaigns, influencing operations, and attempting to undermine the public confidence in the election process. This issue was only exacerbated when the election infrastructure had several noted deficiencies like being connected to routers that were not secured leading to a lot of people believing that there could have been a failure to protect the Integrity of the results, the failure of systems to run in gubernatorial elections, and the overloading of machines in several states throughout the election process. With the digitization of our elections, cybersecurity will have increasingly become a more apparent and necessary heart of our politics as increasing security usually results and decreasing accessibility inline with the CIA triad. 
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
