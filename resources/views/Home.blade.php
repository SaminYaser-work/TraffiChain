@extends('layouts.app')

@section('title', 'TraffiChain')

{{-- @section('header')
    Home 🏠
@endsection --}}

@section('content')


    <section class="flex items-center flex-col min-h-screen w-full">
        <div>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player class="rotate-90" src="https://assets10.lottiefiles.com/packages/lf20_jdv4cm2w.json"
                background="transparent" speed="1" style="width: 300px; height: 200px;" loop autoplay></lottie-player>
        </div>

        <div class="grid place-items-center">
            <h2
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Manage Traffic Tickets with
            </h2>
            <h2
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Smart
                    Contracts</span>
            </h2>
            <p
                class="flex justify-center items-center flex-col gap-2 mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Eliminate the need of trust by harnessing the power of
                <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                    Blockchain</span>
            </p>
            <a href="{{ url('register') }}"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get Started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </section>
@endsection
