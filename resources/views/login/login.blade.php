@extends('layouts.app')

@section('script')
    <link rel="stylesheet" href="{{ url('/css/fox.css') }}">
    <script type="text/javascript" src="{{ url('/js/fox_head.js') }}" defer></script>
    {{-- <script type="text/javascript" src="{{ url('/js/loginMetaMask.js') }}" defer></script> --}}
    <script type="text/javascript" src="{{ url('/js/app.js') }}" defer></script>
@endsection

@section('title')
    Login
@endsection


@section('header')
    Login
@endsection

@section('content')
    @if (session()->get('showError') == true)
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span class="font-medium">Login failed!</span> Credentials did not match.
        </div>
    @endif

    @if (session()->get('newAccount') == true)
        <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert">
            <span class="font-medium">Registration successful!</span> Login to your new account.
        </div>
    @endif
    <form action="/login" method="POST">
        @csrf
        <section class="grid place-items-center">
            <div id="logo-container" class="my-5"></div>
            <div class="grid grid-cols-2 place-items-start grid-flow-row md:grid-flow-col">
                <h1
                    class="col-span-1 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                    I am a
                </h1>
                <select id="accType" name="accType"
                    class="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>...</option>
                    <option value="driver">Driver/Owner</option>
                    <option value="police">Police Officer</option>
                    <option value="judge">Judge</option>
                </select>
            </div>

            {{-- Do with react  --}}
            <button type="button" id="loginBtn"
                class=" text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                Login with MetaMask
            </button>

            <div class="mb-6" id="walletAddInput">
                <label for="walletAddress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Wallet Address
                </label>
                <input type="text" id="walletAddress" name="walletAddress"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <button type="submit" id="lBtn"
                class="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed">
                Login
            </button>
        </section>
    </form>

    <script>
        const ethers = window.ethers;

        const sel = document.getElementById("accType");
        const btn = document.getElementById("loginBtn");
        const walletAddress = document.getElementById("walletAddress");
        const walletAddInput = document.getElementById("walletAddInput");
        const loginBtn = document.getElementById("lBtn");

        btn.style.display = "none";
        walletAddInput.style.display = "none";
        loginBtn.style.display = "none";
        window.signer = null;

        sel.addEventListener("change", function() {
            if (sel.value != "...") {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        });

        btn.addEventListener("click", async function() {
            console.log("clicked");

            if (signer == null) {
                btn.innerHTML = "Connecting...";

                const provider = new ethers.providers.Web3Provider(
                    window.ethereum,
                    "any"
                );
                // Prompt user for account connections

                try {
                    await provider.send("eth_requestAccounts", []);
                    signer = provider.getSigner();
                    const address = await signer.getAddress();
                    btn.style.display = "none";
                    walletAddress.value = address;
                    walletAddInput.style.display = "block";
                    loginBtn.style.display = "block";
                } catch {
                    btn.innerHTML = "Connect with MetaMask";
                    alert("Failed to connect to wallet");
                }
            } else {
                console.log("Already connected", signer);
            }
        });

        console.log(window.signer);
    </script>
@endsection
