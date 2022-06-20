import React, {useState} from "react";
import "./App.css";
import AppContext from "./components/AppContext/AppContext";
import userImage from './media/user.jpg';

function App() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className="App">
            <AppContext.Provider value={{toggleClass: toggleClass}}>
                <span
                    className={
                        isActive
                            ? "absolute text-white text-4xl top-5 left-4 cursor-pointer left-[-300px]"
                            : "absolute text-white text-4xl top-5 left-4 cursor-pointer"
                    }
                    onClick={toggleClass}
                >
                    <i className="bi bi-filter-left px-2 bg-blue-500 rounded-md"></i>
                </span>
                <div
                    className={
                        isActive
                            ? "sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px]" +
                            " overflow-y-auto bg-white"
                            : "sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] " +
                            "overflow-y-auto bg-white left-[-300px]"
                    }
                >
                    <div className="text-gray-100 text-xl">
                        <div className="p-2.5 h-56">
                            <div className={"text-right"}>
                                {isActive ?
                                    <i className="bi bi-x cursor-pointer text-blue-500 lg:hidden bi-align-end
                                hover:text-white hover:bg-blue-500 hover:p-2.5 hover:rounded-md"
                                       onClick={toggleClass}/> :
                                    <i className="hidden"
                                       onClick={toggleClass}/>
                                }
                            </div>
                            <img className={"rounded-full object-cover mx-auto mt-16"}
                                 src={userImage} width={86} height={60} alt=""/>
                        </div>
                    </div>
                    <div className="text-gray-500 text-center mt-1 text-[16px]
                    font-bold uppercase">
                        Steve Yonkeu
                    </div>
                    <div
                        className={"p-2.5 mt-3 flex items-center ml-4 text-gray-400" +
                            " rounded-md px-4 duration-300 cursor-pointer"}>
                        <i className="bi  bi-house-door text-[20px] mr-4"/>
                        <span className="text-[16px] text-center ml-4 font-bold uppercase">
                            Home
                        </span>
                    </div>
                    <div
                        className={"p-2.5 mt-3 flex items-center rounded-md px-4" +
                            "duration-300 cursor-pointer border-4 border-white border-l-blue-400 "}>
                        <i className="bi bi-chat-dots-fill text-[20px] text-blue-400 mr-4 ml-4"/>
                        <span className="text-[16px] ml-4 text-center text-blue-400 font-bold uppercase">
                            Chat
                        </span>
                    </div>
                    <div
                        className="p-2.5 mt-3 flex items-center text-gray-400 ml-4
                         rounded-md px-4 duration-300 cursor-pointer">
                        <i className="bi bi-person text-[20px] mr-4"/>
                        <span className="text-[16px] text-center ml-4 font-bold uppercase">
                            Contact
                        </span>
                    </div>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md ml-4
                         text-gray-400 px-4 duration-300 cursor-pointer">
                        <i className="bi bi-bell text-[20px] mr-4"/>
                        <span className="text-[16px] text-center ml-4 font-bold uppercase">
                            Notifications
                        </span>
                    </div>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md ml-4
                         text-gray-400 px-4 duration-300 cursor-pointer">
                        <i className="bi bi-calendar-date text-[20px] mr-4"/>
                        <span className="text-[16px] ml-4 text-center font-bold uppercase">
                            Calendar
                        </span>
                    </div>
                    <div
                        className="p-2.5 mt-3 flex text-gray-400  items-center ml-4
                         rounded-md px-4 duration-300 cursor-pointer">
                        <i className="bi bi-gear text-[20px] mr-4"/>
                        <span className="text-[16px] text-center ml-4 font-bold uppercase">
                            Settings
                        </span>
                    </div>
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
