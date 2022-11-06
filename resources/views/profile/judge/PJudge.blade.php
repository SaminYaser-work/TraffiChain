@extends('layouts.app')

@section('title')
    {{ $userInfo->NAME }}'s Profile
@endsection

@section('header')
    Welcome, Judge {{ $userInfo->NAME }}
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
                        Wallet
                    </th>
                    <td>
                        {{ substr($userInfo->WALLET_ADDRESS, 0, 5) . '***' . substr($userInfo->WALLET_ADDRESS, -5) }}
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
        </div>

        {{-- Tickets --}}
        <div class="p-6 h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-start items-baseline gap-2 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Active Cases
                </h5>
            </div>


            <div class="flex justify-center items-center flex-col" id="noTickets">
                <p>You currently have</p>
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl" id="ticketCounter">
                    </p>
                </div>
                <p class="">Active Cases.</p>
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

            <script>
                (async () => {
                    const judge = '<?php echo $userInfo->WALLET_ADDRESS; ?>';
                    const tickets = await window.judgeContractFactory.getActiveTickets(
                        judge
                    );

                    console.log(tickets);

                    const numOfTickets = tickets.length;
                    const ticketCounter = document.getElementById('ticketCounter');
                    const noTickets = document.getElementById('noTickets');
                    const linkText = document.getElementById('linkText');

                    ticketCounter.textContent = numOfTickets;

                    if (numOfTickets == 0) {
                        noTickets.classList.add('text-green-600');
                        noTickets.classList.remove('text-red-600');
                        linkText.textContent = 'See Past Cases';
                    } else {
                        noTickets.classList.add('text-red-600');
                        noTickets.classList.remove('text-green-600');
                        linkText.textContent = 'Give Verdict';
                    }
                })();
            </script>

        </div>

    </section>
@endsection
