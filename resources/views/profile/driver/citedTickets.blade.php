@extends('layouts.app')

@section('title')
    {{ __('Cited Tickets') }}
@endsection

@section('header')
    Tickets Cited to
    <span class="font-bold">
        {{ $userInfo->NAME }}
    </span>
@endsection

@section('content')
    <div id="modal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden absolute left-0 right-0 mx-auto z-50 w-full md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white" id='modalHeader'>
                        Pay Ticket
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
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" id="modalBodyText">
                        Pay the fine of <span id="fineAmount"></span> BDT to resolve the ticket (Case Slip ID: <span
                            id="caseSlipId"></span> )?
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button type="button" id="payTicketBtn"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Pay</button>
                    <button type="button" id='closeModal'
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <div id="loadingGif">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent"
            speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
    </div>
    <div id="table" class="overflow-x-auto relative shadow-md sm:rounded-lg hidden">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Case Slip ID
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Police
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Judge
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Fine
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Remaining Time
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" class="py-3 px-6">
                    </th>
                    <th scope="col" class="py-3 px-6">
                    </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <div id="controls" class="hidden mt-10 justify-center items-end gap-6">
        <a href="{{ url('/home') }}"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Back</a>

        <button id="simulateLateBtn" type="button"
            class="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Simulate
            Late Fees (Demo)</button>
    </div>


    <script>
        // TODO: Get better date formatter
        function format_time(s) {
            // const dtFormat = new Intl.DateTimeFormat('en-US', {
            //     dateSytle: 'full',
            //     timeStyle: 'full',
            //     timeZone: 'Asia/Dhaka'
            // });

            // return dtFormat.format(new Date(s * 1e3));
            if (s <= 0) {
                return 'N/A';
            }

            return Math.round(s / 86400) + ' days';
        }

        function show_modal(address, fine, ticketContract) {
            // modal.setAttribute('aria-hidden', 'false');

            const closeModals = document.querySelectorAll("[id='closeModal']");;
            const modal = document.getElementById('modal');
            const payTicketBtn = document.getElementById('payTicketBtn');
            const modalHeader = document.getElementById('modalHeader');
            const modalBodyText = document.getElementById('modalBodyText');

            modalHeader.innerHTML = 'Pay Ticket';
            modalBodyText.textContent = `Pay the fine of ${fine} BDT to resolve the ticket (Case Slip ID: ${address} )?`;

            for (let index = 0; index < closeModals.length; index++) {
                closeModals[index].onclick = (e) => {
                    modal.classList.add('hidden');
                }
            }

            modal.classList.toggle('hidden');

            payTicketBtn.addEventListener('click', async () => {
                payTicketBtn.textContent = 'Please Wait...';
                try {
                    await ticketContract.resolveTicket(2);
                    location.reload();
                } catch (e) {
                    console.log(e);
                    alert('Something went wrong. Please try again later.');
                }
            });

        };

        function contestTicket(address) {

            const closeModals = document.querySelectorAll("[id='closeModal']");;
            const modal = document.getElementById('modal');
            const payTicketBtn = document.getElementById('payTicketBtn');
            const modalHeader = document.getElementById('modalHeader');
            const modalBodyText = document.getElementById('modalBodyText');

            payTicketBtn.textContent = 'Contest';

            modalHeader.textContent = 'Request for a Trial';
            modalBodyText.textContent = 'Do you want to contest the ticket at the court? Case Slip ID: ' + address + '?';

            for (let index = 0; index < closeModals.length; index++) {
                closeModals[index].onclick = (e) => {
                    modal.classList.add('hidden');
                }
            }

            modal.classList.toggle('hidden');

            payTicketBtn.addEventListener('click', async () => {
                payTicketBtn.textContent = 'Please Wait...';
                const ticketContract = window.TicketContractInstance(address,
                    '<?php echo $userInfo->WALLET_ADDRESS; ?>');

                const judgeAddress = await window.judgeContractFactory.getNextJudge();

                const res = await window.judgeContractFactory.assignJudgeToTicket(
                    address,
                    judgeAddress
                );

                try {
                    await ticketContract.requestHearing(judgeAddress);
                } catch (e) {
                    console.log('Error while requesting hearing... Removing judge');
                    await window.judgeContractFactory
                        .removeJudgeFromTicket(judgeAddress,
                            address);
                    alert('Something went wrong. Please try again later.');
                }
                location.reload();
            });

        }

        const table = document.getElementById('table');
        const loadingGif = document.getElementById('loadingGif');
        const controls = document.getElementById('controls');
        const simulateLateBtn = document.getElementById('simulateLateBtn');
        (async () => {
            const tbody = document.querySelector('tbody');

            const tickets = await window.ticketContractFactory.getAllTickets(
                '<?php echo $userInfo->WALLET_ADDRESS; ?>'
            );


            // TODO: Add message when ticket list is empty

            debug = true;
            debugAddress = ''

            tickets.forEach(async (address, idx) => {
                const ticketContract = window.TicketContractInstance(address);

                let [driver, policeWalletAddress, judgeWalletAddress, charges, deadline, status] =
                await ticketContract.getTicketInfo();

                deadline = format_time(deadline);
                const fineAmount = await window.infractionContract.calculateTotalFine(charges);
                console.log(driver, policeWalletAddress, judgeWalletAddress, charges, deadline,
                    status, fineAmount.toString());
                if (judgeWalletAddress == '0x0000000000000000000000000000000000000000') {
                    judgeWalletAddress = 'N/A';
                } else {
                    judgeWalletAddress = judgeWalletAddress.substring(0, 6) + '***' + judgeWalletAddress
                        .substring(
                            38);
                }



                if (status == 'Pending' && debug) {
                    debugAddress = address;
                    const updateStatus = async () => {
                        simulateLateBtn.textContent = 'Please Wait...';
                        try {
                            console.log('Updating status of ticket: ' + address);
                            const ticketContract = await window.TicketContractInstance(
                                debugAddress);
                            // console.log(ticketContract)
                            await ticketContract.updateStatusDemo()
                            location.reload();
                        } catch (e) {
                            console.log(e);
                            // alert('Something went wrong. Please try again later.');
                            simulateLateBtn.textContent = 'Simulate Late Fees (Demo)';
                        }
                    }
                    simulateLateBtn.addEventListener('click', async () => updateStatus());
                    debug = false;
                }


                // const res = await window.infractionContract.getInfractionFine(140);
                // console.log(res.toString());
                // const res2 = await window.infractionContract.getInfractionDescription(140);
                // console.log(res2);

                const ticketInfo = [
                    address.slice(0, 5) + '***' + address.slice(-5),
                    policeWalletAddress.slice(0, 5) + '***' + policeWalletAddress.slice(-5),
                    judgeWalletAddress,
                    fineAmount.toString() + ' BDT',
                    deadline,
                    status
                ];

                const tr = document.createElement('tr');
                classes = ['border-b', 'border-gray-200', 'hover:bg-gray-100',
                    'dark:hover:bg-gray-800'
                ];
                classes.forEach((className) => {
                    tr.classList.add(className);
                });

                for (let i = 0; i < ticketInfo.length; i++) {
                    const td = document.createElement('td');
                    td.classList.add('py-3', 'px-6');
                    td.appendChild(document.createTextNode(ticketInfo[i]));
                    tr.appendChild(td);
                }


                styleClasses = [
                    'font-medium', 'text-blue-600', 'dark:text-blue-500', 'enabled:hover:underline',
                    'disabled:text-slate-400', 'disabled:dark:text-slate-400',
                    'disabled:cursor-not-allowed'
                ];
                // Pay Ticket Button
                let td = document.createElement('td');
                td.classList.add('py-3', 'px-6');
                let payButton = document.createElement('button');
                if (status == 'Pending' || status == 'Late') {
                    payButton.addEventListener('click', () => {
                        show_modal(address, fineAmount, ticketContract);
                    });
                } else {
                    payButton.setAttribute('disabled', 'true');
                }
                payButton.classList.add(...styleClasses);
                payButton.setAttribute('type', 'button');
                payButton.appendChild(document.createTextNode('Pay'));
                td.appendChild(payButton);
                tr.appendChild(td);


                // Contest button
                td = document.createElement('td');
                td.classList.add('py-3', 'px-6');
                const contestButton = document.createElement('button');

                if (status == 'Pending') {
                    contestButton.addEventListener('click', () => contestTicket(address));
                } else {
                    contestButton.setAttribute('disabled', 'true');
                }

                contestButton.setAttribute('type', 'button');
                contestButton.classList.add(...styleClasses);
                contestButton.appendChild(document.createTextNode(
                    'Contest'));
                td.appendChild(contestButton);
                tr.appendChild(td);


                tbody.appendChild(tr);

                if (idx == tickets.length - 1) {
                    loadingGif.classList.add('hidden');
                    table.classList.remove('hidden');
                    controls.classList.add('flex');
                    controls.classList.remove('hidden');
                }
            })

            // loadingGif.classList.add('hidden');
            // table.classList.remove('hidden');
        })();
    </script>
@endsection
