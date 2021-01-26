<link rel="stylesheet" href="../assets/css/feather-icons.css">
<template>
  <cmn-main-content>
    <div class="button-row-end">
      <cmn-button text="Download" icon="feather-download-cloud" :on-click="download" />
        <cmn-button text="Print" icon="feather-printer" :on-click="print" />
    </div>

    <blockquote>Firmitas Utilitas Venustas</blockquote>
    <cite>Vitruvius</cite>

    <section>
     <cmn-section-title title="Tech Skills" icon="feather-cpu"/>
      <p class="text-muted text-right">
        Listed below are languages and technologies that I have notable hands-on experience with
        in a professional and/or academic environment.
      </p>

      <h4 class="text-center" tabindex="0" nogrow>Programming Languages</h4>
      <ul class="flat">
        <li>C++ 11/14/17/20</li>
        <li>C</li>
        <li>X86-64 Assembly</li>
        <li>Bash</li>
        <li>MATLAB®</li>
        <li>Golang</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript/ECMA</li>
        <li>TypeScript</li>
        <li>C#</li>
      </ul>

      <h4 class="text-center" tabindex="0" nogrow>Native Frameworks & Libs</h4>
      <ul class="flat">
        <li>Boost C++ Libraries</li>
        <li>POCO C++ Libraries</li>
        <li>Qt C++</li>
        <li>Google Test</li>
      </ul>

      <h4 class="text-center" tabindex="0" nogrow>Web Dev Frameworks & Libs</h4>
      <ul class="flat">
        <li>Vue.js 2/3</li>
        <li>Svelte</li>
        <li>D3.js</li>
        <li>Express</li>
        <li>Apollo GraphQL</li>
        <li>Google Firebase</li>
        <li>FlowType</li>
      </ul>

      <h4 class="text-center" tabindex="0" nogrow>HW/SW Environments</h4>
      <ul class="flat">
        <li>ARM Cortex-Axx based platforms</li>
        <li>x86_64-based machines</li>
        <li>Amazon EC2</li>
        <li>AWS Lambda</li>
        <li>Google Cloud Functions</li>
        <li>Node.js</li>
        <li>.NET Framework</li>
        <li>Linux-kernel based OSes</li>
        <li>macOS</li>
        <li>Windows</li>
      </ul>

      <h4 class="text-center" tabindex="0" nogrow>Codebases</h4>
      <ul class="flat">
        <li>srsLTE</li>
        <li>OpenAirInterface</li>
        <li>Android Open Source Project</li>
        <li>Linux Kernel</li>
      </ul>

      <h4 class="text-center" tabindex="0" nogrow>Tools</h4>
      <ul class="flat">
        <li>Google Repo</li>
        <li>Git</li>
        <li>Mercurial</li>
        <li>CMake</li>
        <li>BuildRoot</li>
        <li>Android Make Build System</li>
        <li>Yocto</li>
        <li>Jenkins</li>
      </ul>
    </section>

    <section>
      <cmn-section-title title="Exp" icon="feather-grid"/>
      <section>
        <h3 tabindex="0" nogrow>Founder | Fully.me</h3>
        <p class="text-muted">asd</p>
        <p>asd</p>
      </section>
      <section>
        <h3 tabindex="0" nogrow>Co-Founder | Panjāb Institute</h3>
        <p class="text-muted">Dec 2020 - Jan 2021</p>
        <p>asd</p>
      </section>
      <section>
        <h3 tabindex="0" nogrow>SW Engineer | HME Clear-Com Ltd.</h3>
        <p class="text-muted">Nov 2018 - Dec 2019</p>
        <ul class="list">
          <li>Integrated custom-manufactured multi-touch TFT LCDs into the new hardware platform/product range.</li>
          <ul>
            <li>Developed I<sup>2</sup>C <strong>touchscreen display driver</strong> for HME/Clear-Com's internal Linux Kernel source tree.</li>
            <li>
              Developed and maintained modular LCD test application (codebase) for use by QA testers based in HME's manufacturing site (Carlsbad, USA).
            </li>
            <li>Resolved display quality issues with vendor.</li>
          </ul>
          <li>Proposed a <strong>hardware-enforced system security architecture</strong> for the new product range, in consideration of newly-proposed
            subscription licensing model.
          </li>
          <ul>
            <li>Demonstrated <strong>ARM TrustZone and OP-TEE</strong> based SoC security features.</li>
            <li>Liaised with SoC vendor regarding secure storage of cryptographic keys and serial number in SoC's NV OTP
              ROM.</li>
            <li>Initiated company-wide discussion on cryptographic keychain management.</li>
          </ul>
          <li>Conducted technical evaluation of graphics middlewares for the new platform.</li>
          <ul>
            <li>Integrated <strong>graphics middlewares</strong> (and necessary drivers/patches) into Yocto-based platform codebase:</li>
              <ul>
                <li>OpenGL ES (required detailed dependency graphing)</li>
                <li>Qt C++</li>
                <li>Crank Software's Storyboard</li>
              </ul>
            <li>Conducted detailed performance analysis: processor, RAM, and flash storage utilisation.</li>
            <li>Cost analysis/modelling.</li>
            <li>Liased with middleware vendors for clarity on technical and cost-related issues.</li>
            <li>Lead company-wide discussions on user-facing application design and development workflow.</li>
          </ul>
          <li><strong>Board bring-up:</strong> GPMC, I<sup>2</sup>C, SPI, Bluetooth, U-Boot, Linux Kernel.</li>
        </ul>
      </section>
      <section>
        <h3 tabindex="0" nogrow>SW Engineer | Caldero Ltd.</h3>
        <p class="text-muted">Sep 2017 - Nov 2018</p>
        <ul class="list">
            <li>
                Architected and developed a native cross-platform (HW and user-behaviour) analytics solution
                for embedded clients.
            </li>
            <li><strong>Android Open Source Project (AOSP) and Android TV (ATV)</strong></li>
            <ul>
                <li>Customized AOSP/ATV builds for OEM solutions.</li>
                <li>Developed AOSP/ATV build benchmarking tools.</li>
                <li>DevOps: Designed and implemented a flexible <strong>continuous integration -> build -> test ->
                    deployment infrastructure</strong> for ATV builds.
                </li>
            </ul>
            <li>Conveyed latest ATV roadmap (including compliance best practices and Google TV Services (GTVS)
                requirements) across the company and to relevant partners, from a technical perspective.
            </li>
            <li>
                Optimized WiFi/Bluetooth module drivers to resolve co-existence issues and increase bandwidth.
            </li>
        </ul>
      </section>
      <section>
        <h3 tabindex="0" nogrow>OpenAirInterface Programmer (RA) | University of Kent</h3>
        <p class="text-muted">Jul 2016 - Sep 2017</p>
          <ul class="list">
              <li>
                  Implemented a ("5G") Cloud-Radio Access Network (C-RAN) testbed demonstrating a <strong>MAC-PHY
                  functional split of the LTE protocol stack</strong> over a <strong>layer 2 ethernet-switched
                  fronthaul.</strong> The fronthaul implemented a custom RoE (Radio over Ethernet) protocol, using
                  a pre-emptive Linux kernel (RTLinux), pthreads, raw sockets, and machine optimisations.
              </li>
              <li>Developed software tools to accurately capture and record the testbed’s network performance
                  statistics in "real time".</li>
              <li>Co-authored conference papers to explain implications of the research:</li>
              <ul>
                <li>
                  <em>An Ethernet-Based Fronthaul Implementation with MAC/PHY Split LTE Processing</em> (1<sup>st</sup> author),
                  <br>
                  IEEE GLOBECOM (IEEE Global Communications Conference) 2017.
                </li>
                <li>
                  <em>Effects of Contention and Delay in a Switched Ethernet Evolved Fronthaul for Future Cloud-RAN Applications</em> (2<sup>nd</sup> author),
                  <br>
                  ECOC (European Conference on Optical Communication) 2017
                </li>
                <li>
                  <em>Ethernet-based Fronthauling for Cloud- and Virtualized-Radio Access Networks </em> (2<sup>nd</sup> author),
                  <br>
                  ICTON (International Conference on Transparent Optical Networks) 2017
                </li>
              </ul>
          </ul>
      </section>
    </section>

    <section>
      <cmn-section-title title="Edu" icon="feather-book" />
      <section>
        <h3 tabindex="0" nogrow>University of Kent, Canterbury</h3>
        <p class="text-muted">Sep 2011 - Jun 2016</p>
        <p><strong>MEng Computer Systems Engineering:</strong> Graduated with <strong>first-class honours.</strong></p>
        <br>
        <p><em>Modules taken:</em></p>
        <ul class="grid-list">
          <course-module code="CO320" name="Intro. to Object-Oriented Programming" />
          <course-module code="CO324" name="Computer Systems" />
          <course-module code="CO327" name="Web Applications" />
          <course-module code="EL305" name="Intro. to Electronics" />
          <course-module code="EL311" name="The Robotics Project" />
          <course-module code="EL315" name="Digital Technologies" />
          <course-module code="EL318" name="Engineering Mathematics" />
          <course-module code="EL319" name="Engineering Analysis" />
          <course-module code="CO520" name="Further Object-Oriented Programming" />
          <course-module code="CO527" name="Operating Systems and Architecture" />
          <course-module code="EL560" name="Microcomputer Engineering" />
          <course-module code="EL561" name="Image Analysis and Applications" />
          <course-module code="EL562" name="Computer Interfacing" />
          <course-module code="EL565" name="Electronic Instrumentation and Measurement Systems" />
          <course-module code="EL568" name="Digital Implementation" />
          <course-module code="EL569" name="Digital Signal Processing" />
          <course-module code="EL600" name="Project" />
          <course-module code="EL667" name="Embedded Computer Systems" />
          <course-module code="EL671" name="Product Development" />
          <course-module code="EL673" name="Digital Systems Design" />
          <course-module code="EL676" name="Digital Signal Processing and Control" />
          <course-module code="EL677" name="Digital Communication Systems" />
          <course-module code="CB934" name="Strategy" />
          <course-module code="EL750" name="Systems Group Project" />
          <course-module code="EL829" name="Embedded Real-Time Operating Systems" />
          <course-module code="EL857" name="Biometric Technologies" />
          <course-module code="EL874" name="Computer and Reconfigurable Architectures" />
        </ul>
      </section>
    </section>

    <section>
      <h3 tabindex="0" nogrow>Gateway Sixth-Form College, Leicester</h3>
      <p class="text-muted">Sep 2009 - Jun 2011</p>
      <p>
        <span class="text-theme-2">A2</span> Computing,
        <span class="text-theme-2">A2</span> Biology,
        <span class="text-theme-2">AS</span> Electronics, and
        <span class="text-theme-2">AS</span> Chemistry
      </p>
      <br>
      <p><i class="feather-award"></i> <em>Awards:</em></p>
      <ul class="list">
        <li>
          <span>Business, IT and Social Science Faculty Award for A2 Computing,</span>
          <br>
          <em>presented by Rt. Hon. Keith Vaz M.P.</em>
        </li>
        <li>
          IT Faculty Award for AS Computing,
          <br>
          <em>presented by Professor Sir Robert Burgess</em>
        </li>
      </ul>
    </section>

    <section>
      <cmn-section-title title="Other Info" icon="feather-thumbs-up" />
      <ul class="list">
        <li>
          I believe in continually developing new skill-sets and acquiring new knowledge. You can see a list of my completed courses on <a class="no-wrap" href="https://www.linkedin.com/in/tej-b-2b027246" target="_blank">LinkedIn (<i class="feather-linkedin"></i>)</a>.
        </li>
<!--        <li>-->
<!--          I am <strong>not</strong> interested in a job as a "code monkey".-->
<!--          I am an engineer; hire me to solve problems i.e. research, design, develop and/or prototype digital solutions.-->
<!--        </li>-->
        <li>Interviews suck. I'd much rather you send me a realistic coding problem. 🙂</li>
        <li><strong>Citizenship:</strong> British</li>
        <li>I hold a full "clean" UK driver’s license.</li>
      </ul>
    </section>

  </cmn-main-content>
</template>

<script>
// @ is an alias to /src
import CourseModule from "../components/cv/course-module";
import CmnSectionTitle from "../components/common/cmn-section-title";
import CmnButton from "../components/common/cmn-button";
import useFirebaseStorage from "../use/firebase/storage";
import CmnMainContent from "../components/common/cmn-main-content";

export default {
  name: 'home',
  setup() {
    return useFirebaseStorage();
  },
  components: {CmnMainContent, CmnButton, CmnSectionTitle, CourseModule},
  methods: {
    print() {
      window.print();
    },
    download() {
      this.downloadFile("public/CV - Tej Birring.pdf");
    }
  }
}
</script>
