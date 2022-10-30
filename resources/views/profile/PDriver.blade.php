@extends('layouts.app')

@section('title')
    {{ $userInfo->NAME }}'s Profile
@endsection

@section('header')
    Welcome {{ $userInfo->NAME }}
@endsection

@section('content')

    <section class="flex gap-5 flex-wrap mx-10">

        {{-- Info --}}
        <div
            class="p-6 max-w-sm h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

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
        </div>


        {{-- Score --}}
        <div
            class="p-6 max-w-sm h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-start align-middle py-2">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-8 h-8 mr-3 self-baseline" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" {{-- d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" --}}
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                        clip-rule="evenodd"></path>
                </svg>

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Your Score</h5>
            </div>

            @if ($userInfo->SCORE >= 1000)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-green-600">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-green-600">You are an excellent driver.</p>
            @elseif ($userInfo->SCORE >= 80)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-green-400">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-green-400">You are a great driver</p>
            @elseif ($userInfo->SCORE >= 60)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-yellow-400">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-yellow-400">
                    Apart from occasional hiccups, <br> you do ok behind the wheels
                </p>
            @elseif ($userInfo->SCORE >= 30)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-red-500">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-red-500">
                    You need to be more careful <br> while driving
                </p>
            @elseif ($userInfo->SCORE >= 10)
                <div class="grid place-items-center mb-5">
                    <p class="text-6xl lg:text-8xl text-red-600">{{ $userInfo->SCORE }}</p>
                </div>
                <p class="text-red-600">
                    Your license is at risk. <br> Please be more careful
                </p>
            @endif

        </div>


        {{-- Vehicle --}}
        <div class="p-6 h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div class="flex justify-start items-end py-2">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-10 h-10 mr-3 self-baseline" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"
                        clip-rule="evenodd"></path>
                </svg>

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Your Vehicles</h5>
            </div>



            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Model
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Chassis Number
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Class
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Type
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Registration Number
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        @if ($vehicleInfo->count() > 0)
                            @foreach ($vehicleInfo as $vehicle)
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <td class="py-3 px-6">
                                        {{ $vehicle->MODEL }}
                                    </td>
                                    <td class="py-3 px-6">
                                        {{ $vehicle->CHASSIS_NUMBER }}
                                    </td>
                                    <td class="py-3 px-6">
                                        {{ Str::ucfirst($vehicle->CLASS) }}
                                    </td>
                                    <td class="py-3 px-6">
                                        {{ Str::ucfirst($vehicle->TYPE) }}
                                    </td>
                                    <td class="py-3 px-6">
                                        {{ $vehicle->REGISTRATION_NUMBER }}
                                    </td>
                                    <td class="py-3 px-6">
                                        {{ $vehicle->STATUS }}
                                    </td>
                                </tr>
                            @endforeach
                        @else
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <td class="py-3 px-6 col-span-6">
                                    No vehicles found
                                </td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>



            <a href="{{ url('profile/vehicle') }}" class="mt-3 inline-flex items-center text-blue-600 hover:underline">
                Register a new vehicle
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                    </path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
            </a>

        </div>
    </section>
@endsection
