const Header = () => {
    return (
        <div className="flex items-center bg-gray-900 text-gray-50 h-14 w-screen">
            <div className="mx-14 font-bold">
                GameHunt
            </div>
            <div className="w-2/6">
                <input className="h-8 px-3 w-full rounded outline-none bg-gray-50 text-gray-900
                focus:outline-green" type="search" placeholder="Search..." />
            </div>
            <div className="flex-grow mr-14 text-right font-medium">
                <span className="mr-5">Games</span>
                <span className="mx-5">Genres</span>
                <span className="mx-5">Developers</span>
                <span className="mx-5">Publishers</span>
                <span className="mx-5">Creators</span>
                <button className="ml-5 outline-none border-2 border-green-300 text-green-300 rounded px-3 py-1 font-semibold
                hover:bg-green-300 hover:text-gray-900">Wishlist</button>
            </div>
        </div>
    );
}

export default Header;