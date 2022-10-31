@extends('layouts.app')

@section('header')
    Tickets Cited to {{ $userInfo->NAME }}
@endsection

@section('content')
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Case Slip ID
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Police Wallet Address
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Judge Wallet Address
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Fine Amount
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Due Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" class="py-3 px-6">
                    </th>
                    <th scope="col" class="py-3 px-6">
                    </th>
                </tr>
            </thead>
            <tbody>

                @if ($ticketInfo->count() > 0)
                    @foreach ($ticketInfo as $ticket)
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <td class="py-3 px-6">
                                {{ $ticket->CASE_SLIP_NUMBER }}
                            </td>
                            <td class="py-3 px-6">
                                {{ $ticket->POLICE_WALLET_ADDRESS }}
                            </td>
                            <td class="py-3 px-6">
                                @if (!$ticket->JUDGE_WALLET_ADDRESS)
                                    {{ 'None' }}
                                @else
                                    {{ $ticket->JUDGE_WALLET_ADDRESS }}
                                @endif
                            </td>
                            <td class="py-3 px-6" data-tooltip-target="tooltip-default">
                                {{ $ticket->FINE_AMOUNT . ' BDT' }}

                                <div id="tooltip-default" role="tooltip"
                                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                    @foreach ($infractions as $infraction)
                                        {{ $infraction->INFRACTION_ID . ' ' }}
                                    @endforeach
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </td>
                            <td class="py-3 px-6">
                                {{ $ticket->DUE_DATE }}
                            </td>
                            <td class="py-3 px-6">
                                {{ $ticket->STATUS }}
                            </td>
                            <td class="py-3 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Pay
                                </a>
                            </td>
                            <td class="py-3 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Contest
                                </a>
                            </td>
                        </tr>
                    @endforeach
                @else
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <td class="py-3 px-6" colspan="9">
                            You have no tickets.
                        </td>
                    </tr>
                @endif
            </tbody>
        </table>
    </div>

    <div class="flex mt-10 justify-center items-end gap-6">
        <a href="{{ url('/home') }}"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Back</a>
    </div>
@endsection
