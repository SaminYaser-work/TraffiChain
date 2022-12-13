@extends('layouts.app')

@section('title')
    {{ $userInfo->NAME }}'s Profile
@endsection

@section('header')
    Welcome {{ $userInfo->NAME }}
@endsection

@section('content')
    <section class="flex justify-center gap-5 flex-wrap mx-10">

        {{-- Info --}}
        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            id="driverinfo__react"></div>

        {{-- <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

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
                        NID
                    </th>
                    <td>
                        {{ $userInfo->NID }}
                    </td>
                </tr>

                <tr>
                    <th class="text-left pr-5">
                        License No.
                    </th>
                    <td>
                        {{ $userInfo->LICENSE_NUMBER }}
                    </td>
                </tr>

                <tr>
                    <th class="text-left pr-5">
                        Issue Date
                    </th>
                    <td>
                        {{ $userInfo->LICENSE_ISSUE_DATE }}
                    </td>
                </tr>

                <tr>
                    <th class="text-left pr-5">
                        Expiration
                    </th>
                    <td>
                        {{ $userInfo->LICENSE_EXPIRY_DATE }}
                    </td>
                </tr>
            </table>

            <a href="{{ url('profile/update') }}" class="inline-flex items-center text-blue-600 hover:underline">
                Change Information
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                    </path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
            </a>
        </div> --}}

        {{-- Tickets --}}
        <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-start items-end py-2">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-8 h-8 mr-3 self-start" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        clip-rule="evenodd"></path>
                </svg>


                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Cited Tickets
                </h5>
            </div>




            <div class="flex justify-center items-center flex-col" id="noTickets">
                <p>You currently have</p>
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl" id="ticketCounter">
                    </p>
                </div>
                <p class="">issued tickets.</p>
                <p class="text-green-600 hidden" id="goodText">Keep up the good work.</p>
            </div>




            <a href="{{ url('profile/tickets') }}" class="mt-3 inline-flex items-center text-blue-600 hover:underline">
                <span id="linkText">
                </span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                    </path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z">
                    </path>
                </svg>
            </a>


        </div>

        {{-- Score --}}
        <div id="score__react"
            class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        </div>

        <script>
            (async () => {


                const tickets = await window.ticketContractFactory.getActiveTickets(
                    '<?php echo $userInfo->WALLET_ADDRESS; ?>'
                );
                console.log('tickets: ', tickets);

                const numOfTickets = tickets.length;
                const ticketCounter = document.getElementById('ticketCounter');
                const noTickets = document.getElementById('noTickets');
                const linkText = document.getElementById('linkText');
                const goodText = document.getElementById('goodText');

                ticketCounter.textContent = numOfTickets;

                if (numOfTickets == 0) {
                    noTickets.classList.add('text-green-600');
                    noTickets.classList.remove('text-red-600');
                    linkText.textContent = 'See History';
                    goodText.classList.remove('hidden');
                } else {
                    noTickets.classList.add('text-red-600');
                    noTickets.classList.remove('text-green-600');
                    linkText.textContent = 'Resolve Tickets';
                }
            })();
        </script>

        {{-- Vehicle --}}

        <div class="p-6 h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            id="vehicleinfo__react"></div>

        {{-- <div class="p-6 h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">


        </div> --}}




    </section>
@endsection
