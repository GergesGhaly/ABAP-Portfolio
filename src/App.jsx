import { Routes, Route } from "react-router-dom";
import { projectsList } from "./data/projects";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import FileViewer from "./pages/FileViewer";
import Certificats from "./pages/Certificats";

export default function App() {
  const sampleData = {
    name: "Gerges Ghaly",
    title: "Senior ABAP Developer / SAP Consultant",
    contact: {
      email: "m.ghaly@example.com",
      phone: "+20 1X XXX XXXX",
      location: "Cairo, Egypt",
      linkedin: "linkedin.com/in/mohamedghaly",
      languages: ["Arabic (native)", "English (fluent)"],
    },
    summary:
      "Experienced ABAP developer with 7+ years designing, developing and supporting SAP solutions across SD, MM and FI modules. Strong background in performance tuning, ALV, OData services and integrations.",
    skills: [
      "ABAP OO & classical ABAP",
      "ALV (Grid & OO)",
      "BDC / LSMW",
      "SmartForms & Adobe Forms",
      "SAP Gateway / OData",
      "Performance tuning & SQL optimization",
    ],
    technologies: [
      "SAP ECC / S/4HANA",
      "HANA SQL",
      "SAPUI5 (light)",
      "REST APIs",
      "Git",
    ],
    certifications: [
      "SAP Certified Development Associate - ABAP",
      "SAP S/4HANA Essentials",
    ],
    education: {
      degree: "B.Sc. Computer Science",
      school: "Ain Shams University",
      year: "2016",
    },
    experience: [
      {
        role: "Senior ABAP Developer",
        company: "ABC Solutions",
        period: "2021 - Present",
        location: "Cairo, Egypt",
        responsibilities: [
          "Designed and developed custom ALV reports and OO-based modules for SD and MM processes.",
          "Built OData services for SAP Fiori apps and integrated with external REST APIs.",
          "Reduced runtime of a large batch job by 60% through SQL tuning and buffering techniques.",
        ],
      },
      {
        role: "ABAP Developer",
        company: "XYZ Technology",
        period: "2017 - 2021",
        location: "Cairo, Egypt",
        responsibilities: [
          "Implemented interfaces using IDoc and BAPI for third-party systems.",
          "Created SmartForms and Adobe Interactive Forms for invoicing.",
          "Maintained transport requests and collaborated on unit testing and CI processes.",
        ],
      },
    ],
    projects: [
      {
        name: "PO Mass Update Tool",
        period: "2023",
        technologies: ["ABAP", "ALV Grid", "BAPI"],
        summary:
          "Tool to mass-update purchase orders with validations and rollback capability. Improved processing throughput and traceability.",
      },
      {
        name: "Vendor Onboarding OData",
        period: "2022",
        technologies: ["SAP Gateway", "OData", "SAP Fiori"],
        summary:
          "Developed OData services and backend logic to support a vendor onboarding Fiori app.",
      },
    ],
  };

  return (
    <Routes>
      {/* Main layout */}
      <Route path="/" element={<MainLayout />}>
        {/* المحتوى الذي سيتم استبداله داخل Outlet */}
        <Route index element={<Home />} />
        <Route path="cv" element={<CV data={sampleData} />} />
        <Route
          path="projects/:projectId/files/:fileId"
          element={<FileViewer />}
        />

        {/* صفحات التواصل */}
        <Route path="certificats" element={<Certificats />} />

        {/* صفحات المشاريع */}
        {projectsList.map((p) => (
          <Route key={p.id} path={`projects/${p.id}`} element={p.element} />
        ))}
      </Route>
    </Routes>
  );
}
