import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLinkedin, faGithub, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin as faLinkedinBrands, faGithub as faGithubBrands } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-gray-700 py-6 px-8 flex justify-between" id="home">
        <div className="container space-x-4">
          {/*<a href="#home" className="text-white hover:text-gray-300">
            Home
          </a> */}
          <a href="lebenslauf.pdf" className="text-white hover:text-gray-300">
            Lebenslauf
          </a>
          <a href="https://www.github.com/aheckl?tab=repositories" className="text-white hover:text-gray-300">
            Softwareprojekte auf GitHub
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Kontakt
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-blue-section relative z-0">
        <div className="container p-8 text-center">
          <h1 className="text-4xl font-light text-white mb-4">Andreas Heckl</h1>
          <div className="flex justify-center mt-1 relative z-10">
            <img src="bild.jpg" alt="Round Picture" className="rounded-full h-32 w-32 border-1" />
          </div>
          <p className="text-lg text-white mt-4">Softwareentwickler bei MTU Aero Engines AG, München</p>
          <p className="text-lg text-white">Master Wirtschaftsinformatik (TUM)</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-300 p-4 relative z-0">
        <div className="container p-4">
          <h2 className="text-2xl font-normal text-center text-gray-900 mb-4">About</h2>
          <p className="text-black">
            Bis Juni 2024 studierte ich im Master Wirtschaftsinformatik (engl.: Information Systems) an der
            Informatikfakultät der Technischen Universität München (TUM). Ich schloss mein Studium mit einer
            Masterarbeit über sozio-technische Faktoren bei Cloudmigration bzw. Cloudtransformation ab. Meinen Bachelor
            schloss ich ebenfalls in Wirtschaftsinformatik an der TUM ab. Zuvor absolvierte ich eine Ausbildung zum IHK
            Handelsfachwirt bei SportScheck und spezialisierte mich dort im Controlling. Meinen Lebenslauf finden Sie{" "}
            <a href="lebenslauf.pdf" className=" underline hover:text-gray-500">
              hier
            </a>
            .
          </p>
          <p className="text-black mt-4">
            Meine Interessensgebiete sind breit gestreut: Ich belegte Seminare zu den Themen Cloud, Softwarequalität und
            KI Regulierung sowie Praktika zu den Themen Webentwicklung, ServiceNow Entwicklung und SAP BTP. Meine
            Bachelorarbeit schrieb ich am Lehrstuhl von Prof. Helmut Krcmar über Process Mining. Meine Masterarbeit
            schrieb ich am selben Lehrstuhl zum Thema Cloudmigration bzw. Transformation.
          </p>

          <p className="text-black mt-4">
            Neben meinen Werkstudentenjobs bei SportScheck, DeutschlandCard und ProSiebenSat.1 Tech Solutions kam ich
            auch durch Praktika und Seminare an der TUM in Kontakt mit der Industrie, z.B. Celonis, dem Weltmarktführer
            für Process Mining Software, und ServiceNow, einem führenden Anbieter von cloud-basiertem Workflow
            Managment.
          </p>

          <p className="text-black mt-4">
            Seit Januar 2025 bin ich als Vollzeit-Softwareentwickler im fertigungsnahen Umfeld bei der MTU Aero Engines
            AG in München-Allach tätig.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-blue-section">
        <div className="container p-8">
          <h2 className="text-2xl font-normal text-center text-white mb-4">
            Softwareprojekte und wissenschaftliche Arbeiten
          </h2>
          <p>
            All meine wissenschaftlichen Arbeiten (Konferenzpaper, Masterarbeit, Bachelorarbeit und Seminararbeiten)
            finden Sie in{" "}
            <a href="https://github.com/aheckl/scientific-work" className=" underline hover:text-gray-300">
              diesem GitHub Repository.
            </a>{" "}
            Alle weiteren Softwareprojekte und die Programme zu den jeweiligen wissenschaftlichen Arbeiten finden Sie
            auf der{" "}
            <a href="https://github.com/aheckl/?tab=repositories" className=" underline hover:text-gray-300">
              Übersichtsseite meiner Github Repositories.
            </a>{" "}
            Hier ist eine Auswahl:
          </p>
          {/* <h2 className="text-2xl font-light text-white mb-2 mt-2">wissenschaftliche Arbeiten</h2> */}
          <br></br>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">
              <a href="ma.pdf" className=" underline hover:text-gray-300">
                [2024] Investigating Socio-Technical Factors of Cloud Migration
              </a>
              <br />
              Masterarbeit über sozio-technische Faktoren bei Cloudmigration bzw. Cloudtransformation in Unternehmen.
              Ich führte für diese Arbeit 20 Interviews mit Praxisexperten.
              <br />
            </li>
            <li className="mb-2">
              <a href="seminar-cloud.pdf" className=" underline hover:text-gray-300">
                [2024] Cloud Driven Organizational Transformation - Rethinking IT-related Roles and Structures
              </a>
              <br />
              Seminararbeit über den Einfluss von Cloud Computing auf IT Rollen und Strukturen in Unternehmen. Wir
              führten zu diesem Thema eine Literaturrecherche durch.
              <br />
            </li>
            <li className="mb-2">
              <a href="https://ieeexplore.ieee.org/document/10125248" className=" underline hover:text-gray-300">
                [2023] Simulation Tool for Action Oriented Process Mining
              </a>
              <br />
              Konferenzpaper auf Basis meiner Bachelorarbeit. Dieses Paper wurde im Mai 2023 auf der EDUCON in Kuwait
              präsentiert. Es geht um ein Python Programm, welches Geschäftsprozessdaten simuliert und diese in Celonis
              einspeist, sodass die Daten in der Lehre verwendet werden können.
              <br />
            </li>
            <li className="mb-2">
              <a href="ai-act.pdf" className="underline text-white hover:text-gray-300">
                [2023] The EUs AI Act Proposal: Technical Documentation and Discussion of KONUX Switch
              </a>
              <br />
              Seminararbeit zum EU-Gesetzesentwurf zur Regulierung von künstlicher Intelligenz (AI Act Proposal). Wir
              analysierten ein spezifisches KI-Tool im Eisenbahnsektor.
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/aheckl/web-application-engineering-practical-course"
                className="underline text-white hover:text-gray-300"
              >
                [2022] Online Shop for Renting Computer Hardware
              </a>
              <br />
              Im Zuge des Universitätspraktikums{" "}
              <em>Software Engineering for Business Applications: Web Application Engineering</em> im Sommersemester
              2022 entwickelten wir in einem Team von 4 Studenten einen Onlineshop namens AirParts, in welchem Kunden PC
              Hardware wie Prozessoren oder Grafikkarten mieten können. Für die Entwicklung nutzten wir den MERN Stack
              (MongoDB, Express.js, React, Node.js) und Material UI als Styling Library.
            </li>
            <li className="mb-2">
              <a href="ba.pdf" className="underline text-white hover:text-gray-300">
                [2022] Simulation von kontinuierlichen Geschäftsprozessdaten für Process Mining in der Lehre
              </a>
              <br />
              Bachelorarbeit über Process Mining. Im Zuge dieser Arbeit habe ich ein Python Programm geschrieben,
              welches kontinuierlich Prozessdaten erzeugt, in eine Datenbank speichert und diese regelmäßig nach Celonis
              überträgt, wo die Daten ausgewertet werden können.
            </li>
            <li>
              <a href="swq.pdf" className="underline text-white hover:text-gray-300">
                [2020] Maintainability of Java Methods: A Quantitative Approach
              </a>
              <br />
              Seminararbeit zum Thema Softwarequalität. Ich entwickelte ein Tool mittels Python und Excel, welches die
              Wartbarkeit von Java Methoden quantitativ bewertet.
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-300 p-4" id="contact">
        <div className="container p-4">
          <h2 className="text-2xl font-normal text-center text-gray-900 mb-4">Kontakt</h2>
          <ul className="list-disc pl-6">
            <li>
              <a href="mailto:a.heckl@hotmail.de" className="text-blue-600 hover:underline">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aheckl/" className="text-blue-600 hover:underline">
                <FontAwesomeIcon icon={faLinkedinBrands} className="mr-2" />
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/aheckl" className="text-blue-600 hover:underline">
                <FontAwesomeIcon icon={faGithubBrands} className="mr-2" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-700 py-4 px-8 flex justify-between">
        <div className="container space-x-4 text-center">
          <p> Copyright 2025 Andreas Heckl | Created with Next.js</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
