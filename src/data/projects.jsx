import file1Content from "./code/ZGG_ALV_VIEWER.txt?raw";
import file2Content from "./code/ZGG_ALV_VIEWER_DEF.txt?raw";

export const projectsList = [
  {
    id: "project1",
    name: "ZGG_ALV_VIEWER",
    icon: "📘",
    files: [
      { id: "file1", name: "ZGG_ALV_VIEWER", content: file1Content },
      { id: "file2", name: "ZGG_ALV_VIEWER_DEF", content: file2Content },
    ],
  },
];
