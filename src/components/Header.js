import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="flex items-center bg-gray-900 text-gray-50 h-14 w-screen">
            <div className="mx-6 font-bold text-base sm:text-lg lg:mx-14">
                GameHunt
            </div>
            <div className="w-3/5 lg:w-2/5">
                <input className="h-8 px-3 w-full rounded outline-none bg-gray-700 text-gray-50
                focus:outline-gray" type="search" placeholder="Search..." />
            </div>
            <div className="flex-grow mx-6 text-right font-medium lg:mx-14">
                <span className="hidden mr-5 hover:text-yellow-300 lg:inline">
                    <span className="hidden xl:inline">Explore </span> 
                    Platforms
                </span>
                <span className="hidden mx-5 hover:text-yellow-300 lg:inline">
                    <span className="hidden xl:inline">Explore </span> 
                    Stores
                </span>
                <button className="hidden outline-none border-2 border-yellow-300 text-yellow-300 rounded px-3 py-1 font-semibold
                hover:bg-yellow-300 hover:text-gray-900 lg:ml-5 sm:inline">Wishlist</button>
                <FontAwesomeIcon icon={faBell} className="text-yellow-300 sm:hidden text-xl"/>
            </div>
        </div>
    );
}

export default Header;