# 🚥 TraffiChain 🚥

Smart Traffic Ticket 🎫 Management System with _Smart Contracts_ powered by _Blockchain_ ⛓️

Picked for finals (TOP 10) in __CTO Innovation Hackathon 2022__
<!-- __YASER, SAMIN__

_19-39442-1_

_Sec: B_ -->

## Project Description

The goal of this project is to introduce a transparent, corruption-free and trustless method in issuing traffic tickets. A police officer can issue a traffic ticket which is represented as a smart contract. Authorized parties like the driver and the court can interact with the contract to dismiss it by paying or fighting it. Whatever the choices are, the ticket can manage its own state. It can keep track of deadlines, introduce late fees and can even cancel driver license if the need arises. Immutibility of the blockchain ensures security and prevents man-in-the-middle attacks.

## Usage Instruction

Firstly, clone the repository using the following command:

```bash
git clone https://github.com/SaminYaser-work/TraffiChain.git
```
Then, `cd` into that directory and run the following commands to install the dependencies:

```bash
cd TraffiChain
composer install
npm install
```

Then, run the following commands to generate the application key and migrate the database (make sure XAMMP is running):

```bash
php artisan key:generate
php artisan migrate:fresh --seed --seeder=tcSeed
```

Then finally run the following command to start the server:

```bash
php artisan serve
```

And the following command for tailwind to work:

```bash
npm run watch
```

Visit `http://localhost:8000` to see the website.

And you are good to go! Please consider giving a ⭐ to this repository if you found it useful 😊😊😊
