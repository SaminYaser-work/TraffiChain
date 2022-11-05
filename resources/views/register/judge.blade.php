@extends('layouts.app')

@section('script')
    <script type="text/javascript" src="{{ url('/js/regM.js') }}" defer></script>
@endsection

@section('title')
    Register
@endsection

@section('header')
    Judge Registration
@endsection

@section('content')
    <div class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg max-w-md" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Registering as a Judge</span>
        <div>
            <span class="font-medium">Please read the following carefully:</span>
            <ul class="mt-1.5 ml-4 text-blue-700 list-disc list-inside">
                <li>This registration is only for the judicial person only.</li>
                <li>Get your private key from <a class="text-rose-500 font-semibold"
                        href="http://www.bjsc.gov.bd/">Bangladesh
                        Judicial
                        Sevice Commission</a>
                </li>
                <li>In <span class="text-orange-600">MetaMask</span>, click on <span class="font-mono">import account</span>
                </li>
                <li>After that, you can easily connect your wallet to complete your registration</li>
            </ul>
        </div>
    </div>
    <form>
        @csrf

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('name') }}>

            <label for="name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
            </label>

            <span class="text-red-600 text-xs" id="nameErr">
            </span>
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <div class="relative w-full">
                <input type="text" id="walletAddress" name="walletAddress"
                    class="rounded-tl-lg rounded-bl-lg block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    value="{{ old('walletAddress') }}" placeholder="Your Wallet Address">

                <button type="button" id="regMMBtn" name="regMMBtn"
                    class="cursor-pointer absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-orange-600 rounded-r-lg border border-orange-600 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    🦊
                </button>
            </div>

            <span class="text-red-600 text-xs" id="walletAddressErr">
            </span>
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


        btn.onclick = (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const walletAddress = document.getElementById('walletAddress').value;


            btn.textContent = 'Please wait...';
            let http = new XMLHttpRequest();
            http.open("POST", "/register", true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.setRequestHeader('Accept', 'application/json');
            http.send(
                `name=${name}&walletAddress=${walletAddress}&_token={{ csrf_token() }}`
            );
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const data = JSON.parse(this.responseText);
                    console.log(data);

                    try {
                        createNewJudgeProfileInBC(
                            data.walletAddress,
                            data.name,
                        );

                        <?php session()->flash('newAccount', true); ?>


                        window.location.href = '/login';
                    } catch (e) {
                        console.log(e);
                        btn.textContent = 'Register';
                    }
                } else if (this.readyState == 4) {
                    btn.textContent = 'Register';
                    const data = JSON.parse(this.responseText);
                    console.log(data);


                    const nameErr = document.getElementById('nameErr');
                    const walletAddressErr = document.getElementById('walletAddressErr');

                    nameErr.textContent = data.errors?.name;
                    walletAddressErr.textContent = data.errors?.walletAddress;
                }
            };
        };

        const createNewJudgeProfileInBC = async (wallet, name) => {
            const res = await window.window.judgeContractFactory.createNewJudge(
                name, wallet
            );

            // Testing
            console.log('Saved in blockchain ', res);
        }
    </script>
@endsection
