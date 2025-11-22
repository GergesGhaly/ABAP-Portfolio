import { Routes, Route } from "react-router-dom";
import { projectsList } from "./data/projects";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import FileViewer from "./pages/FileViewer";
import Certificats from "./pages/Certificats";

export default function App() {
  

  return (
    <Routes>
      {/* Main layout */}
      <Route path="/" element={<MainLayout />}>
        {/* المحتوى الذي سيتم استبداله داخل Outlet */}
        <Route index element={<Home />} />
        <Route path="cv" element={<CV pdfUrl="/my-cv.pdf" />} />
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
