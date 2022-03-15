
/*
class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan{
    void berjalan() {
        tambahkecepatan(10);
    }
    tambahkecepatan(var kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main () {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}
*/

class kendaraan {
    constructor(totalroda, kecepatanperjam){
        this.totalroda = totalroda = 0;
        this.kecepatanperjam = kecepatanperjam = 0;
       }
    move(){
        /* ... */
    }
}

class mobil extends kendaraan{
    constructor () {
        tambahkecepatan(10);
    }
    
    tambahkecepatan (kecepatanperjam, kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
        
    }
    
}
