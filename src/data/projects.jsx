import file1Content from "./code/ZGG_ALV_VIEWER.txt?raw";
import file2Content from "./code/ZGG_ALV_VIEWER_DEF.txt?raw";
import ZGG_ALV_VIEWER_Documentation from "./code/Documentation.txt?raw";

export const projectsList = [
  {
    id: "project1",
    name: "ZGG_ALV_VIEWER",
    icon: "📘",
    files: [
      { id: "file1", name: "ZGG_ALV_VIEWER", content: file1Content },
      { id: "file2", name: "ZGG_ALV_VIEWER_DEF", content: file2Content },
      { id: "file3", name: "Documentation", content: ZGG_ALV_VIEWER_Documentation },
    ],
  },
  // {
  //   id: "project2",
  //   name: "",
  //   icon: "📘",
  //   files: [
  //     { id: "file1", name: "", content:  },
  //     { id: "file2", name: "", content:  },
  //   ],
  // },
];
