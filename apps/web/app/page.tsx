import Menu from "@/ui/menu";
import Editor from "@/ui/editor";

export default function Page() {
  return (
    <>
    <div className="flex justify-start space-x-4 m-2">
      <button className="bg-blue-400 mt-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"><a href="https://docs.google.com/document/u/0/" target="_blank" rel="noopener noreferrer">
    Open Docs
  </a>Open Docs</button>
      <button className="bg-gray-400 mt-4 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"><a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
    Open Docs
  </a>Open Notion</button>
      <button className="bg-red-400 mt-4 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"><a href="https://coda.io/workspaces/" target="_blank" rel="noopener noreferrer">
    Open Docs
  </a>Open Coda</button>
      <button className="bg-green-400 mt-4 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"><a href="https://www.evernote.com/client/web?login=true#/notes" target="_blank" rel="noopener noreferrer">
    Open Docs
  </a>Open Evernote</button>
  </div>
    <div className="flex flex-col items-center sm:px-4">
      
      <a
        href="https://finalproject-drab.vercel.app/"
        target="_blank"
        className="absolute bottom-5 left-5 z-10 max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
      >
        
      </a>
      <Menu />
      <Editor />
    </div>
    </>
  );
}
