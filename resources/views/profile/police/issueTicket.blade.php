@extends('layouts.app')

@section('title')
    {{ $userInfo->NAME }}'s Profile
@endsection

@section('header')
    Issue Ticket
@endsection
{{-- flex justify-center gap-5 flex-wrap mx-10 --}}
@section('content')
    <div id="modal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden absolute left-0 right-0 mx-auto z-50 w-full md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white" id='modalHeader'>
                        Issue Ticket
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        id='closeModal'>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div class="mb-6">
                        <label for="codes"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Infraction
                            code(s)</label>
                        <input type="text" id="codes" name="codes"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            For multiple infractions, separate them with a comma.
                        </p>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button type="button" id="payTicketBtn"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Cite</button>
                    <button type="button" id='closeModal'
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <section class="">

        <form class="w-72 md:w-96">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="number" id="default-search"
                    class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value="4444444444" placeholder="Search license plate..." required>
                <button type="submit" id="searchBtn"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

        <div class="p-4 mt-10 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">

            <div id="resultInitial" class="grid place-content-center">
                <p class="text-gray-500 mt-2 text-lg">
                    Search for a license plate
                </p>
            </div>

            <div class="hidden" id="resultFound">
                <h5 id="vehicleName" class="mb-4 text-xl font-medium"></h5>
                <table class="w-full">
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Chassis No
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="chassisNo">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Status
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="vehicleStatus">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Class
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="vehicleClass">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Type
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="vehicleType">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Number Plate
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="licenseNo">
                            </span>
                        </td>
                    </tr>
                </table>
                <h6 class="mb-2 mt-4 text-lg font-medium text-gray-400">Owner Information</h6>
                <table class="w-full">
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Name
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="name">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                NID
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="nid">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                License No
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="lic">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Issue Date
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="issue">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Expire Date
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="exp">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
                                    fill="currentColor" />
                            </svg>
                        </th>
                        <th class="text-center">
                            <p class="text-sm font-bold w-fit text-gray-900 dark:text-gray-400">
                                Score
                            </p>
                        </th>
                        <td class="ml-3">
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                                id="score">
                            </span>
                        </td>
                    </tr>
                </table>


                <button type="button" id="issueTicketBtn"
                    class="text-white mt-5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                    Issue Ticket</button>
            </div>
            <div id="loading" class="hidden ">
                <div class="flex justify-center items-center flex-col">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_Y6YtJv.json"
                        background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay>
                    </lottie-player>
                    <p class="text-gray-500 mt-2 text-lg">
                        Searching...</p>
                </div>
            </div>
            <div id="resultNotFound" class="hidden ">
                <div class="flex justify-center items-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-20 h-20 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>

                    <p class="text-gray-500 mt-2 text-lg">
                        Not found</p>
                </div>
            </div>
        </div>

        <script>
            const getClass = (t) => {
                switch (t) {
                    case 0:
                        return "Sedan";
                    case 1:
                        return "Bus";
                    case 2:
                        return "Truck";
                    case 3:
                        return "Motorbike";
                    case 4:
                        return "CNG";
                    default:
                        return "Unknown";
                }
            }

            const getStatus = (s) => {
                switch (s) {
                    case 0:
                        return "On Road";
                    case 1:
                        return `<span class="text-red-500">Impounded</span>`;
                    case 2:
                        return "Decommissioned";
                    case 3:
                        return "Registration Pending";
                    default:
                        return "Unknown";
                }
            }

            const getType = (t) => {
                switch (t) {
                    case 0:
                        return "Government";
                    case 1:
                        return "Civilian";
                    case 2:
                        return "Special";
                    default:
                        return "Unknown";
                }
            }

            const searchBtn = document.getElementById('searchBtn');

            searchBtn.onclick = async function(e) {
                e.preventDefault();
                const s = document.getElementById('default-search').value;
                const resultInitial = document.getElementById('resultInitial');
                const resultFound = document.getElementById('resultFound');
                const resultNotFound = document.getElementById('resultNotFound');
                const loading = document.getElementById('loading');

                loading.classList.remove('hidden');

                const vehicleName = document.getElementById('vehicleName');
                const chassisNo = document.getElementById('chassisNo');
                const vehicleStatus = document.getElementById('vehicleStatus');
                const vehicleClass = document.getElementById('vehicleClass');
                const vehicleType = document.getElementById('vehicleType');
                const licenseNo = document.getElementById('licenseNo');

                const issue = document.getElementById('issue');
                const exp = document.getElementById('exp');
                const score = document.getElementById('score');
                const nid = document.getElementById('nid');
                const name = document.getElementById('name');
                const lic = document.getElementById('lic');

                resultInitial.classList.add('hidden');

                const res = await window.VehicleFactoryContract.getVehicleByLicense(
                    parseInt(s),
                )

                console.log(res);

                if (res[0] != '') {

                    vehicleName.innerHTML = res[0];
                    chassisNo.innerHTML = res[1];
                    vehicleStatus.innerHTML = getStatus(res[2]);
                    vehicleClass.innerHTML = getClass(res[3]);
                    vehicleType.innerHTML = getType(res[4]);
                    licenseNo.innerHTML = res[5];

                    const profileAddress = window.driverContractFactory.getDriverProfile(
                        res[6]
                    );

                    window.address1 = res[6];

                    const driverContract = await window.DriverContractInstance(
                        profileAddress
                    );

                    const driverInfo = await driverContract.getAllInfo();

                    console.log(driverInfo);

                    name.innerHTML = driverInfo[0];
                    nid.innerHTML = driverInfo[1];
                    lic.innerHTML = driverInfo[2];
                    issue.innerHTML = (new Date(driverInfo[3] * 1000)).toLocaleDateString();
                    exp.innerHTML = (new Date(driverInfo[4] * 1000)).toLocaleDateString();
                    score.innerHTML = driverInfo[5];

                    loading.classList.add('hidden');
                    resultFound.classList.remove('hidden');
                    resultNotFound.classList.add('hidden');
                } else {
                    loading.classList.add('hidden');
                    resultFound.classList.add('hidden');
                    resultNotFound.classList.remove('hidden');
                }

            }

            const issueTicketBtn = document.getElementById('issueTicketBtn');
            issueTicketBtn.addEventListener('click', async function() {

                const closeModals = document.querySelectorAll("[id='closeModal']");;
                const modal = document.getElementById('modal');
                const payTicketBtn = document.getElementById('payTicketBtn');
                const modalHeader = document.getElementById('modalHeader');

                for (let index = 0; index < closeModals.length; index++) {
                    closeModals[index].onclick = (e) => {
                        modal.classList.add('hidden');
                    }
                }

                modal.classList.toggle('hidden');

                payTicketBtn.onclick = async () => {
                    payTicketBtn.textContent = 'Processing...';

                    let codes = document.getElementById('codes').value;
                    try {
                        codes = codes.split(',').map((c) => {
                            c = parseInt(c.trim())
                            if (isNaN(c)) {
                                throw new Error('Invalid code');
                            }
                            return c;
                        });
                    } catch (e) {
                        alert(e.message);
                        payTicketBtn.textContent = 'Cite';
                        return;
                    }

                    const ticketFactory = window.ticketContractFactory2(
                        '<?php echo $userInfo->WALLET_ADDRESS; ?>'
                    );

                    const policeFactory = window.policeContractFactory2(
                        '<?php echo $userInfo->WALLET_ADDRESS; ?>'
                    );

                    console.log(await window.address1);

                    await ticketFactory.createNewTicket(
                        window.address1,
                        codes
                    )

                    const ticketAddress = await ticketFactory.getLastAddedTicket();

                    await policeFactory.addTicket(
                        ticketAddress
                    );
                    alert('Ticket issued successfully');
                    payTicketBtn.textContent = 'Cite';
                }
            })
        </script>
    </section>
@endsection
