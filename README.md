# 🚥 TraffiChain 🚥

Smart Traffic Ticket 🎫 Management System with Blockchain ⛓️
<!-- __YASER, SAMIN__

_19-39442-1_

_Sec: B_ -->

## Usage Instruction

Firstly, clone the repository using the following command:

```bash
git clone https://github.com/SaminYaser-work/AWT-FALL22-23.git
```
Then, `cd` into that directory and run the following commands to install the dependencies:

```bash
cd TraffiChain
composer install
npm install
```

Then, run the following commands to generate the application key and migrate the database:

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
