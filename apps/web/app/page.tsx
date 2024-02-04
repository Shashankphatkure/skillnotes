import Menu from "@/ui/menu";
import Editor from "@/ui/editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Open Google Docs
  </button>
  <button className="bg-blue-500 hover:bg-black-600 text-white font-bold py-2 px-4 rounded">
  Open Notion Docs
  </button>
  <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
  Open Coda 
  </button>
  <button className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
  Open Evernote 
  </button>
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
