@extends('layouts.app')

@section('header')
    Driver Registration 🚘
@endsection

@section('content')
    <form action="/register" method="POST">
        @csrf

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('name') }}>

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
                placeholder=" " value={{ old('nid') }}>

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
                placeholder=" " value={{ old('lic') }}>

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
                    placeholder=" " value={{ old('issue') }}>
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
                    placeholder=" " value={{ old('exp') }}>
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
            <label for="link-checkbox" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">
                I testify that, I have provided the <strong class="text-blue-500">correct information.</strong>
            </label>
        </div>


        <button type="submit"
            class="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed">
            Register
        </button>
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
