@extends('layouts.app')

@section('script')
    {{-- <script type="text/javascript" src="{{ url('/js/regM.js') }}" defer></script> --}}
@endsection

@section('title')
    Profile
@endsection

@section('header')
    {{ $userInfo->NAME }}'s Profile
@endsection

@section('content')
    @if (session()->get('infoChangeSuccess') == true)
        <div class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Success!</span> Your profile has been updated.
            </div>
        </div>
    @endisset

    <form action="/profile/update" method="POST">
        @csrf

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value="<?php echo session()->get('userInfo')->NAME; ?>">

            <label for="name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
            </label>

            @if ($errors->has('name'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('name') }}
                </span>
            @endif
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="nid" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value="<?php echo session()->get('userInfo')->NID; ?>">

            <label for="nid"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                NID
            </label>

            @if ($errors->has('nid'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('nid') }}
                </span>
            @endif
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="lic" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value="<?php echo session()->get('userInfo')->LICENSE_NUMBER; ?>">

            <label for="lic"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                License No.
            </label>

            @if ($errors->has('lic'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('lic') }}
                </span>
            @endif
        </div>



        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
                <input type="date" name="issue" id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " value="<?php echo session()->get('userInfo')->LICENSE_ISSUE_DATE; ?>">
                <label for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    License Issue Date</label>
                @if ($errors->has('issue'))
                    <span class="text-red-600 text-xs">
                        {{ $errors->first('issue') }}
                    </span>
                @endif
            </div>

            <div class="relative z-0 mb-6 w-full group">
                <input type="date" name="exp" id="floating_company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " value="<?php echo session()->get('userInfo')->LICENSE_EXPIRY_DATE; ?>">
                <label for="floating_company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    License Expiration Date</label>
                @if ($errors->has('exp'))
                    <span class="text-red-600 text-xs">
                        {{ $errors->first('exp') }}
                    </span>
                @endif
            </div>
        </div>


        <div class="flex items-center mb-5">
            <input id="terms" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-blue-600 rounded border-gray-300 focus:ring-blue-500 selection:bg-blue-600">
            <label for="terms" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">
                I testify that, I have provided the <strong class="text-blue-500">correct information.</strong>
            </label>
        </div>


        <div class="flex justify-center items-end gap-6">
            <button type="submit"
                class="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed">
                Update
            </button>

            <a href="{{ url('/profile') }}"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Back</a>
        </div>

    </form>

    <script>
        const terms = document.getElementById('terms');
        const btn = document.querySelector('button[type="submit"]');

        terms.checked ? btn.disabled = false : btn.disabled = true;

        terms.addEventListener('change', function() {
            if (terms.checked) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        });
    </script>
@endsection
