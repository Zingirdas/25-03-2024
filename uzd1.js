//------- 1 --------//
class Trupmena {
    #x = [5, 3, 5];

    //------- 2 --------//
    set x(x) {
        this.#x = x;
    }
    get x() {
        return this.#x;
    };

    //------- 3 --------//
    toString() {
        const [sv, sk, va] = this.#x;
        if (sk === 0) {
            return sv.toString();
        } else if (sv === 0) {
            return `${sk}/${va}`;
        } else {
            return `${sv} ${sk}/${va}`;
        }
    }

    //------- 5 --------//
    pridetInt(svSk) {
        this.#x[0] += svSk;
    }

    //------- 6 --------//
    prideti(pridetSv, pridetSk, pridetVa) {
        const bendrVa = this.#x[2] * pridetVa;
        const naujSk = this.#x[1] * pridetVa + pridetSk * this.#x[2];
        const naujSv = this.#x[0] + pridetSv;
        this.#x[0] = naujSv;
        this.#x[1] = naujSk;
        this.#x[2] = bendrVa;
    }

    //------- 7 --------//
    pridetiTrupmena(trupmena) {
        const bendrVa = this.#x[2] * trupmena.x[2];
        const naujSk = this.#x[1] * trupmena.x[2] + trupmena.x[1] * this.#x[2];
        const naujSv = this.#x[0] + trupmena.x[0];
        this.#x[0] = naujSv;
        this.#x[1] = naujSk;
        this.#x[2] = bendrVa;
    }

    //------- 8 --------//
    toDouble() {
        return this.#x[0] / this.#x[2] + this.#x[1] / this.#x[2];
    }
};


//------- 4 --------//
let trupmena = new Trupmena();
console.log('-- Uzduotis Nr.4 --');
console.log(trupmena.toString());

//------- 5 --------//
trupmena.pridetInt(2);
console.log('-- Uzduotis Nr.5 --');
console.log(trupmena.toString());

//------- 6 --------//
trupmena.prideti(2, 3, 1);
console.log('-- Uzduotis Nr.6 --');
console.log(trupmena.toString());

//------- 7 --------//
let kitaTrupmena = new Trupmena();
kitaTrupmena.x = [1, 1, 2];
console.log('-- Uzduotis Nr.7 --');
trupmena.pridetiTrupmena(kitaTrupmena);
console.log(trupmena.toString());

//------- 8 --------//
console.log('-- Uzduotis Nr.8 --');
console.log(trupmena.toDouble().toString());






