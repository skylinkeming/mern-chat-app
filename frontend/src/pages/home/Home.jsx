import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

export default function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-lg">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
