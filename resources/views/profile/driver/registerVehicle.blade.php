@extends('layouts.app')

@section('script')
    <script type="text/javascript" src="{{ url('/js/regM.js') }}" defer></script>
@endsection

@section('title')
    Register Vehicle
@endsection

@section('header')
    Vehicle Registration 🚘
@endsection

@section('content')
    <form action="/profile/vehicle" method="POST">
        @csrf

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="model" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('model') }}>

            <label for="model"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Model Name
            </label>

            @if ($errors->has('model'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('model') }}
                </span>
            @endif
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="chassis" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('chassis') }}>

            <label for="chassis"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Chassis No.
            </label>

            @if ($errors->has('chassis'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('chassis') }}
                </span>
            @endif
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">

                <label for="underline_select" class="sr-only">Vehicle Class</label>
                <select id="underline_select" name="class"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option selected>Choose a class</option>
                    <option value="sedan">Sedan</option>
                    <option value="bus/truck">Bus/Truck</option>
                    <option value="motorbike">Motorbike</option>
                    <option value="suv">SUV</option>
                </select>

                @if ($errors->has('class'))
                    <span class="text-red-600 text-xs">
                        {{ $errors->first('class') }}
                    </span>
                @endif
            </div>

            <div class="relative z-0 mb-6 w-full group">

                <label for="underline_select2" class="sr-only">Vehicle Type</label>
                <select id="underline_select2" name="type"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option selected>Choose a type</option>
                    <option value="government">Government</option>
                    <option value="special">Special</option>
                    <option value="civilian">Civilian</option>
                </select>

                @if ($errors->has('type'))
                    <span class="text-red-600 text-xs">
                        {{ $errors->first('type') }}
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


        <button type="submit"
            class="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed">
            Submit
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
