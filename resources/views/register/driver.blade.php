@extends('layouts.app')

@section('script')
    <script type="text/javascript" src="{{ url('/js/regM.js') }}" defer></script>
@endsection

@section('title')
    Register
@endsection

@section('header')
    Driver Registration 🚘
@endsection

@section('content')
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
            <input type="number" name="nid" id="nid"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('nid') }}>

            <label for="nid"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                NID
            </label>

            <span class="text-red-600 text-xs" id="nidErr">
            </span>
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="lic" id="lic"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('lic') }}>

            <label for="lic"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                License No.
            </label>

            <span class="text-red-600 text-xs" id="licErr">
            </span>
        </div>



        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
                <input type="date" name="issue" id="issue"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " value={{ old('issue') }}>
                <label for="issue"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    License Issue Date</label>
                <span class="text-red-600 text-xs" id="issueErr">
                </span>
            </div>

            <div class="relative z-0 mb-6 w-full group">
                <input type="date" name="exp" id="exp"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " value={{ old('exp') }}>
                <label for="exp"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    License Expiration Date</label>
                <span class="text-red-600 text-xs" id="expErr">
                </span>
            </div>
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

        {{-- TODO: Remove this on production --}}
        <button type="button" id="debugBtn"
            class="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed">
            Quickfill (Debug)
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

        // TODO: Remove this on production
        const debugBtn = document.getElementById('debugBtn');
        debugBtn.onclick = function() {
            document.getElementById('name').value = 'Samin';
            document.getElementById('nid').value = '5555555555';
            document.getElementById('lic').value = '555555555555555';
            document.getElementById('issue').value = '2021-01-01';
            document.getElementById('exp').value = '2022-01-01';
            document.getElementById('walletAddress').value = '0xA28a18B05b4b2b842a15275942834d5228626334';
            terms.checked = true;
            btn.disabled = false;
        }


        btn.onclick = (e) => {
            console.log('clicked');
            e.preventDefault();

            const form = document.querySelector('form');
            const name = document.getElementById('name').value;
            const nid = document.getElementById('nid').value;
            const lic = document.getElementById('lic').value;
            const issue = document.getElementById('issue').value;
            const exp = document.getElementById('exp').value;
            const walletAddress = document.getElementById('walletAddress').value;


            btn.textContent = 'Please wait...';
            let http = new XMLHttpRequest();
            http.open("POST", "/register", true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.setRequestHeader('Accept', 'application/json');
            http.send(
                `name=${name}&nid=${nid}&lic=${lic}&issue=${issue}&exp=${exp}&walletAddress=${walletAddress}&_token={{ csrf_token() }}`
            );
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // const data = JSON.parse(this.responseText);

                    const data = JSON.parse(this.responseText);
                    console.log(data);

                    try {
                        createNewDriverProfileInBC(
                            data.walletAddress,
                            data.name,
                            data.nid,
                            data.lic,
                            data.issue,
                            data.exp
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
                    const nidErr = document.getElementById('nidErr');
                    const licErr = document.getElementById('licErr');
                    const issueErr = document.getElementById('issueErr');
                    const expErr = document.getElementById('expErr');
                    const walletAddressErr = document.getElementById('walletAddressErr');

                    nameErr.textContent = data.errors?.name;
                    nidErr.textContent = data.errors?.nid;
                    licErr.textContent = data.errors?.lic;
                    issueErr.textContent = data.errors?.issue;
                    expErr.textContent = data.errors?.exp;
                    walletAddressErr.textContent = data.errors?.walletAddress;

                }
            };
        };


        const createNewDriverProfileInBC = async (wallet, name, nid, lic, issue, exp) => {
            const res = await window.driverContractFactory.createNewDriverProfile(wallet, name, nid, lic, issue,
                exp);

            // Testing
            console.log(res);



            // const depContractAddress = await window.driverContractFactory.getDriverProfile(
            //     wallet
            // );

            // console.log(depContractAddress);

            // const driverProfile = new ethers.Contract(
            //     depContractAddress,
            //     window.driverContractABI,
            //     window.systemSigner
            // );

            // const driverName = await driverProfile.getName();

            // console.log(driverName);
        }
    </script>
@endsection
