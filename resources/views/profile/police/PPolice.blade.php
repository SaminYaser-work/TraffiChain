@extends('layouts.app')

@section('title')
    {{ $userInfo->NAME }}'s Profile
@endsection

@section('header')
    Welcome, Officer {{ $userInfo->NAME }}
@endsection

@section('content')
    <section class="flex justify-center gap-5 flex-wrap mx-10">

        {{-- Info --}}
        <div
            class="p-6 h-fit max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-start align-middle py-2">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-8 h-8 mr-3 self-baseline" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Your Information</h5>
            </div>

            <table class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                <tr>
                    <th class="text-left pr-5">
                        Name
                    </th>
                    <td>
                        {{ $userInfo->NAME }}
                    </td>
                </tr>

                <tr>
                    <th class="text-left pr-5">
                        Station
                    </th>
                    <td>
                        {{ $userInfo->STATION }}
                    </td>
                </tr>

                <tr>
                    <th class="text-left pr-5">
                        Rank
                    </th>
                    <td>
                        {{ $userInfo->RANK }}
                    </td>
                </tr>

                <tr>
                    <th class="text-left pr-5">
                        Badge No.
                    </th>
                    <td>
                        {{ $userInfo->BADGE_NUMBER }}
                    </td>
                </tr>

                <tr>
                    <th class="text-left pr-5">
                        Wallet
                    </th>
                    <td>
                        {{ substr($userInfo->WALLET_ADDRESS, 0, 5) . '***' . substr($userInfo->WALLET_ADDRESS, -5) }}
                    </td>
                </tr>
            </table>

            {{-- <a href="{{ url('profile/update') }}" class="inline-flex items-center text-blue-600 hover:underline">
                Change Information
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                    </path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
            </a> --}}
        </div>

        {{-- Score --}}
        <div
            class="p-6 h-fit max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-start align-middle py-2">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-8 h-8 mr-3 self-baseline" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" {{-- d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" --}}
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                        clip-rule="evenodd"></path>
                </svg>

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Your Score</h5>
            </div>

            @if ($userInfo->SCORE >= 100)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-green-600">{{ $userInfo->SCORE }}</p>
                    <p class="text-green-600">You are a shining example.</p>
                    <p class="text-green-600">Keep up the good work, officer.</p>
                </div>
            @elseif ($userInfo->SCORE >= 80)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-green-400">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-green-400">You are a great officer</p>
            @elseif ($userInfo->SCORE >= 60)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-yellow-400">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-yellow-400">
                    Good job, but you can do better.
                </p>
            @elseif ($userInfo->SCORE >= 30)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-red-500">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-red-500">
                    You need to improve your performance.
                </p>
            @elseif ($userInfo->SCORE >= 10)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-red-600">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-red-600">
                    You are a disgrace to the badge.
                </p>
            @endif

        </div>


        {{-- Issue Tickets --}}
        <div
            class="p-6 h-fit max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-start align-middle py-2">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-8 h-8 mr-3 self-baseline" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" {{-- d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" --}}
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                        clip-rule="evenodd"></path>
                </svg>

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Issue New Ticket</h5>
            </div>

            <div class="grid place-items-center ">
                <a class="cursor-pointer" href="{{ url('/profile/issue-ticket') }}">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-20 h-20">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

            </div>

        </div>




    </section>
@endsection
