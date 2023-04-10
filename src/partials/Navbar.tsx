
const Navbar = () => (
	<header>
		<nav className="border-gray-200 ">
      <div className="text-center pt-8">
        <h1>
          <a href="/" className="block items-center">
            <span className="text-2xl md:text-6xl font-semibold">
              Jhoni Pereira
            </span>
          </a>
        </h1>
      </div>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
				<div className="flex md:order-2">
					
					{/* <button
						data-collapse-toggle="navbar-cta"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-cta"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button> */}
				</div>
				<div
					className="items-center justify-between flex w-auto md:order-1"
					id="navbar-cta"
				>
					<ul className="flex font-medium text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row space-x-3 md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
						<li>
							<a
								href="https://www.linkedin.com/in/jhoni-pereira/" target="_blank"
								className="block py-2 pl-3 pr-4  rounded bg-transparent text-white md:p-0 md:dark:text-blue-500"
							>
                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </i>
							</a>
						</li>
            
            <li>
							<a
								href="https://github.com/jhonipereira" target="_blank"
								className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
							>
                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </i>
							</a>
						</li>

            <li>
							<a
								href="https://twitter.com/Jhoni_Tech" target="_blank"
								className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
								aria-current="page"
							>
                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </i>
							</a>
						</li>
						<li>
							<a
								href="mailto:hello@jhonipereira.com"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
);

export { Navbar };
