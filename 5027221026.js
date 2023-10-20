function userAPI() {
    var xhttp = new XMLHttpRequest();
    var apiUrl = "https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/users";
    
    var index = 0;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);

            if (obj.users[index]) {
                let nama = obj.users[index].name;
                let posisi = obj.users[index].position;
                let kantor = obj.users[index].company;
                let following = obj.users[index].following_count;
                let followers = obj.users[index].followers_count;
                // let email = obj.users.contact.email;
                // let nomor = obj.users.contact.phone;
                // let alamat = obj.users.contact.address;
                console.log("udah diambil")

                document.getElementById("nama").textContent = nama;
                document.getElementById("posisi").textContent = posisi;
                document.getElementById("kantor").textContent = kantor;
                document.getElementById("following").textContent = following;
                document.getElementById("followers").textContent = followers;
                console.log("harusnya ada")
                // document.getElementById("email").textContent = email;
                // document.getElementById("nomor").textContent = nomor;
                // document.getElementById("alamat").textContent = alamat;
            } else {
                console.log("no data");
            }
        }
    }
    // Define the API URL
    xhttp.open("GET", apiUrl, true);
    xhttp.send();
}

function productsAPI(index) {
    var xhttp = new XMLHttpRequest();
    var apiUrl = "https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/products";
    
    var index = 0;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);

            if (obj.products[index]) {
                let gambar = obj.products[index].image_url;
                let nama = obj.products[index].name;
                let harga = obj.products[index].price;
                let diskon = obj.products[index].discount;
                let nilai = obj.products[index].rating;
                let view = obj.products[index].reviews_count;

                document.getElementById("gambar").src = gambar;
                document.getElementById("nama").textContent = nama;
                document.getElementById("harga").textContent = harga;
                document.getElementById("diskon").textContent = diskon + "off";
                document.getElementById("nilai").textContent = nilai;
                document.getElementById("view").textContent = "Viewed by: " + view;
            } else {
                console.log("no data");
            }
        }
    }
    // Define the API URL
    xhttp.open("GET", apiUrl, true);
    xhttp.send();
}

function ptableAPI(index) {
    var xhttp = new XMLHttpRequest();
    var apiUrl = "https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/price-tables";
    
    var index = 0;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);

            if (obj.price_tables[index]) {
                let pnama = obj.price_tables[index].package_name;
                let pharga= obj.price_tables[index].price_per_month;
                let feat = obj.price_tables[index].features;

                document.getElementById("pnama").textContent = pnama;
                document.getElementById("pharga").textContent = pharga;
                document.getElementById("feat").textContent = feat;
            } else {
                console.log("no data");
            }
        }
    }
    // Define the API URL
    xhttp.open("GET", apiUrl, true);
    xhttp.send();
}