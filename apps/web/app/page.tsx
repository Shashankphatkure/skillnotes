import Menu from "@/ui/menu";
import Editor from "@/ui/editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <div className="flex space-x-4">
      <button className="bg-blue-200 mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
  Open Docs
  </button>
  <button className="bg-gray-200 mt-4 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
  Open Notion
  </button>
  <button className="bg-red-200 mt-4 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
  Open Coda 
  </button>
  <button className="bg-green-200 mt-4 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
  Open Evernote 
  </button>
  </div>
      <a
        href="https://finalproject-drab.vercel.app/"
        target="_blank"
        className="absolute bottom-5 left-5 z-10 max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
      >
        
      </a>
      <Menu />
      <Editor />
    </div>
  );
}
