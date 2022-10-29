@extends('layouts.app')

@section('header')
    Login
@endsection

@section('content')
    <section class="flex justify-center align-middle gap-3">

        <a href="{{ url('register/driver') }}"
            class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Driver / Owner 🚘
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Login as a driver or owner, add your vehicle, see active tickets, and more.
            </p>
        </a>


        <a href="{{ url('register/police') }}"
            class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Police 👮
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Login as a police officer, see issued tickets, and more.
            </p>
        </a>


        <a href="{{ url('register/judge') }}"
            class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Judge 🧑‍⚖️
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Login as a judge, manage ongoing cases, and more.
            </p>
        </a>


    </section>
@endsection
