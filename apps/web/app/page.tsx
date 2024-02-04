import Menu from "@/ui/menu";
import Editor from "@/ui/editor";

export default function Page() {
  return (
    <div className="min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <div className="min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <a
        href="https://finalproject-drab.vercel.app/"
        target="_blank"
        className="absolute bottom-5 left-5 z-10 rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
      >
        Open Project
      </a>
      <a
        href="https://www.notion.so" // replace with your actual Notion link
        target="_blank"
        className="bg-white p-2 m-2 absolute bottom-5 left-5"
      >
        Open Notion
      </a>
    </div>
      <Menu />
      <Editor />
    </div>
  );
}
