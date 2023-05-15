document.addEventListener("DOMContentLoaded", () => {
  const mainSectionMarkdown = `
#Header

<br>
##Programming Language Design

As a programmer who spends a massive amount of time, well, programming, I have found the topic of programming languages themselves and what makes a
*good* programming language to be quite fascinating.

<br>
##Energy-Efficient Embedded Systems with RISC-V Architecture
<img src="https://riscv.org/wp-content/uploads/2018/09/riscv-logo-1.png" width="500px">

RISC-V is an open-source, royalty-free instruction set architecture (ISA) that has gained traction in the embedded systems community.
Its modular, extensible design allows for a high degree of customization, making it ideal for creating energy-efficient embedded systems
tailored to specific applications. As an Information Technology professional, you might explore new processor designs and implementations
utilizing the RISC-V ISA, which can lead to reduced power consumption, longer battery life, and improved performance for devices ranging
from IoT sensors to advanced robotics.

<br>
##IOT Device Security with Zero Trust Architechture

<img src="https://w7.pngwing.com/pngs/563/750/png-transparent-internet-of-things-world-2018-world-s-largest-iot-event-technology-organization-internet-of-things.png" width="200"></img>

Zero Trust Architecture (ZTA) is a security model that shifts the focus from traditional perimeter-based defenses to a more comprehensive,
data-centric approach. This framework is built on the premise that no device, user, or network should be inherently trusted. Instead, trust
must be continuously validated through a combination of multiple layers of security controls, advanced analytics, and real-time monitoring.
ZTA is particularly relevant in the context of IoT devices, where the rapid expansion of connected devices poses unique security challenges. 
`;

  const sidebarFirstMarkdown = `
##Extra Content

This section contains __text__.
`;

  const sidebarSecondMarkdown = `
##Extra Content

This section contains a link to my [github](https://github.com/linux-techtips).
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
