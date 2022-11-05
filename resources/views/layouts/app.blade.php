<!DOCTYPE html>

<html lang="en" class="dark">



<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script type="text/javascript" src="{{ url('/js/app.js') }}"></script>

    @yield('script')

    <title>
        @yield('title')
    </title>

</head>



<body style="background: linear-gradient(176deg, rgba(18,24,27,1) 50%, rgba(32,39,55,1) 100%);"
    class="text-white min-h-screen font-['Cubano Regular']">



    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-transparent">

        <div class="container flex flex-wrap justify-between items-center mx-auto">

            <a href="{{ url('home') }}" class="flex items-center">

                <img src="{{ url('/images/logo.png') }}" class="mr-3 h-6 sm:h-9" alt="TraffiChain Logo" />

                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TraffiChain</span>

            </a>

            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">

                <span class="sr-only">Open main menu</span>

                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">

                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>

                </svg>

            </button>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">

                <ul
                    class="flex flex-col items-center gap-1 justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">

                    <li>

                        <a href="{{ url('home') }}"
                            class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                            aria-current="page">Home</a>

                    </li>

                    {{-- <li>

                        <a href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>

                    </li>

                    <li>

                        <a href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>

                    </li> --}}

                    <li>

                        <a href="{{ url('register') }}"
                            class="block py-2 px-3 text-white bg-slate-500 rounded">Register</a>

                    </li>

                    <li>
                        @if (session()->has('accType'))
                            <a href="{{ url('logout') }}"
                                class="block py-2 px-3 text-white bg-red-500 rounded">Logout</a>
                        @else
                            <a href="{{ url('login') }}"
                                class="block py-2 px-3 text-white bg-green-500 rounded">Login</a>
                        @endif
                    </li>

                </ul>

            </div>

        </div>

    </nav>




    <div class="flex justify-center items-center flex-col my-10">

        <h1 class="text-4xl font-extrabold dark:text-white mb-5">@yield('header')</h1>

        <main class="my-5 h-screen">

            @yield('content')

        </main>

    </div>


    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="{{ url('/home') }}" class="flex items-center mb-4 sm:mb-0">
                <img src="{{ url('/images/logo.png') }}" class="mr-3 h-8" alt="TraffiChain Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TraffiChain</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="{{ url('/home') }}" class="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="{{ url('/register') }}" class="mr-4 hover:underline md:mr-6 ">Register</a>
                </li>
                <li>
                    <a href="{{ url('/login') }}" class="mr-4 hover:underline md:mr-6 ">Login</a>
                </li>
                <li>
                    {{-- <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li> --}}
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        {{-- TODO: Add github link --}}
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#"
                class="hover:underline">TraffiChain™</a>. All Rights Reserved.
        </span>
    </footer>




</html>
