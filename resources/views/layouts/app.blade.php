<!DOCTYPE html>

<html lang="en" class="dark">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script type="text/javascript" src="{{ url('/js/app.js') }}"></script>

    {{-- React components --}}
    <script type="text/javascript" src="{{ url('/js/react.js') }}" defer></script>

    @yield('script')

    <title>
        @yield('title')
    </title>

</head>


<body style="background: linear-gradient(176deg, rgba(18,24,27,1) 50%, rgba(32,39,55,1) 100%);"
    class="text-white min-h-screen font-['Cubano Regular']">

    <?php
    $at = Session::get('accType');
    $sess = Session::get('userInfo');
    if ($sess != null) {
        $wallet = $sess->WALLET_ADDRESS;
        $id = $sess->id;
    } else {
        $wallet = '';
        $id = '';
    }
    ?>

    <script>
        window.accType = "{{ $at }}";
        window.wallet = "{{ $wallet }}";
        window.id = "{{ $id }}";

        console.log(window.accType, window.wallet, window.id);
    </script>


    <div id="navbar__react"></div>

    <div class="flex justify-center items-center flex-col my-10">

        <h1 class="text-4xl font-extrabold dark:text-white mb-5">@yield('header')</h1>

        <main class="my-5 h-screen">

            @yield('content')

        </main>

    </div>

    <div id="footer__react"></div>

</html>
