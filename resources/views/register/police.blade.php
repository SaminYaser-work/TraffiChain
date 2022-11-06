@extends('layouts.app')

@section('script')
    <script type="text/javascript" src="{{ url('/js/regM.js') }}" defer></script>
@endsection

@section('title')
    Register
@endsection

@section('header')
    Police Registration
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
            <input type="text" name="station" id="station"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('station') }}>

            <label for="station"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Station
            </label>

            <span class="text-red-600 text-xs" id="stationErr">
            </span>
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="rank" id="rank"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('rank') }}>

            <label for="rank"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Rank
            </label>

            <span class="text-red-600 text-xs" id="rankErr">
            </span>
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="badge" id="badge"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ old('badge') }}>

            <label for="badge"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Badge Number
            </label>

            <span class="text-red-600 text-xs" id="badgeErr">
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
            document.getElementById('name').value = 'Bonoz Kumar';
            document.getElementById('station').value = 'PBI';
            document.getElementById('rank').value = 'Commissioner';
            document.getElementById('badge').value = 42069;
            document.getElementById('walletAddress').value = '0xD340CeB30F633DfB88603Bab41F740B080B9fDc9';
            terms.checked = true;
            btn.disabled = false;
        }


        btn.onclick = (e) => {
            console.log('clicked');
            e.preventDefault();

            const name = document.getElementById('name').value;
            const station = document.getElementById('station').value;
            const rank = document.getElementById('rank').value;
            const badge = document.getElementById('badge').value;
            const walletAddress = document.getElementById('walletAddress').value;


            btn.textContent = 'Please wait...';
            let http = new XMLHttpRequest();
            http.open("POST", "/register", true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.setRequestHeader('Accept', 'application/json');
            http.send(
                `name=${name}&station=${station}&rank=${rank}&badge=${badge}&walletAddress=${walletAddress}&_token={{ csrf_token() }}`
            );
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // const data = JSON.parse(this.responseText);

                    const data = JSON.parse(this.responseText);
                    console.log(data);


                    try {
                        createNewPoliceProfileInBC(
                            data.walletAddress,
                            data.name,
                            data.station,
                            data.rank,
                            data.badge,
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
                    const stationErr = document.getElementById('stationErr');
                    const rankErr = document.getElementById('rankErr');
                    const badgeErr = document.getElementById('badgeErr');
                    const walletAddressErr = document.getElementById('walletAddressErr');

                    nameErr.textContent = data.errors?.name;
                    stationErr.textContent = data.errors?.station;
                    rankErr.textContent = data.errors?.rank;
                    badgeErr.textContent = data.errors?.badge;
                    walletAddressErr.textContent = data.errors?.walletAddress;

                }
            };
        };


        const createNewPoliceProfileInBC = async (wallet, name, station, rank, badge) => {
            const res = await window.policeContractFactory.createNewPolice(
                wallet, name, station, rank, badge);

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
