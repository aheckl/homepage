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
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="cv.pdf" className="text-white hover:text-gray-300">
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
          <p className="text-lg text-white mt-4">Masterstudent Wirtschaftsinformatik</p>
          <p className="text-lg text-white">Fakultät für Informatik, Technische Universität München</p>
          <p className="text-lg text-white mt-4">Werkstudent Datacenter & Cloud Solutions</p>
          <p className="text-lg text-white">ProSiebenSat.1 Tech Solutions GmbH</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-300 p-4 relative z-0">
        <div className="container p-4">
          <h2 className="text-2xl font-normal text-center text-gray-900 mb-4">About</h2>
          <p className="text-black">
            Ich studiere im Master Wirtschaftsinformatik an der Informatikfakultät der Technischen Universität München
            (TUM). Meinen Bachelor schloss ich ebenfalls in Wirtschaftsinformatik an der TUM ab. Zuvor absolvierte ich
            eine Ausbildung zum IHK Handelsfachwirt bei SportScheck und spezialisierte mich dort im Controlling. Meinen
            Lebenslauf finden Sie{" "}
            <a href="cv.pdf" className=" underline hover:text-gray-500">
              hier
            </a>
            .
          </p>
          <p className="text-black mt-4">
            Meine Interessensgebiete sind breit gestreut: Ich belegte Seminare zu den Themen Softwarequalität und KI
            Regulierung sowie Praktika zu den Themen Webentwicklung und ServiceNow. Meine Bachelorarbeit schrieb ich bei
            Prof. Helmut Krcmar über Process Mining.
          </p>

          <p className="text-black mt-4">
            Neben meinen Werkstudentenjobs bei SportScheck, DeutschlandCard und ProSiebenSat.1 Tech Solutions kam ich
            auch durch Praktika und Seminare an der TUM in Kontakt mit der Industrie, z.B. Celonis, dem Weltmarktführer
            für Process Mining Software, und ServiceNow, einem führenden Anbieter von cloud-basiertem Workflow
            Managment.
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
            Sie können all meine Softwareprojekte und wissenschaftliche Arbeiten (Konferenzpaper, Bachelorarbeit und
            Seminararbeiten) auf meinem{" "}
            <a href="https://www.github.com/aheckl?tab=repositories" className=" underline hover:text-gray-500">
              GitHub Profil
            </a>{" "}
            finden. Hier ist eine Auswahl:
          </p>
          <h2 className="text-2xl font-light text-white mb-2 mt-2">wissenschaftliche Arbeiten</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">
              <a href="https://ieeexplore.ieee.org/document/10125248" className=" underline hover:text-gray-500">
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
              Seminararbeit zum EU Gesetzesentwurf zur Regulierung von künstlicher Intelligenz (AI Act Proposal). Wir
              analysierten ein spezifisches KI Tool im Eisenbahnsektor.
            </li>
            <li className="mb-2">
              <a href="ba.pdf" className="underline text-white hover:text-gray-300">
                [2022] Simulation von kontinuierlichen Geschäftsprozessdaten für Process Mining in der Lehre
              </a>
              <br />
              Bachelorarbeit über Process Mining. Im Zuge dieser Arbeit habe ich ein Python Programm geschrieben,
              welches kontinuerlich Prozessdaten erzeugt, in eine Datenbank speichert und diese regelmäßig nach Celonis
              überträgt, wo die Daten ausgewertet werden können.
            </li>
            <li>
              <a href="swq.pdf" className="underline text-white hover:text-gray-300">
                [2020] Maintainability of Java Methods: A Quantitative Approach
              </a>
              <br />
              Seminararbeit zum Thema Softwarequalität. Ich entwickelte ein Tool mittels Python und Excel, welches die
              Wartbarkeit von Java Methoden quantiativ bewertet.
            </li>
          </ul>
          <h2 className="text-2xl font-light text-white mt-4 mb-2">Softwareprojekte</h2>
          <ul className="list-disc pl-6 text-white">
            <li>Simulation Tool </li>
            <li>Project Title 2</li>
            <li>Project Title 3</li>
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
                Email: a.heckl@hotmail.de
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/your-profile-link" className="text-blue-600 hover:underline">
                <FontAwesomeIcon icon={faLinkedinBrands} className="mr-2" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/aheckl" className="text-blue-600 hover:underline">
                <FontAwesomeIcon icon={faGithubBrands} className="mr-2" />
                github.com/aheckl
              </a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org/author/37089842369" className="text-blue-600 hover:underline">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                IEEE Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-700 py-4 px-8 flex justify-between">
        <div className="container space-x-4">
          <p> Copyright 2023 Andreas Heckl | Erstellt mit Next.js</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
