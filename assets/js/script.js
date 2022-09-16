// first we fetch data from the server (API)
var arr = [];
var ol = document.createElement("ol");
var button = document.createElement("button");
button.innerHTML = "Next";
document.body.appendChild(ol);
document.body.appendChild(button);
fetch("https://restcountries.com/v3.1/all")
	// second if there's success, parsing data so that JS can handle it
	.then((res) => res.json())
	// third handling the data however we want
	.then((data) => {
		data.map((comingData) => {
            arr.push(comingData.name.common);
		});
        var n = 0;
        for (i=0; i < 50; i++) {
            let slicedArr = arr.slice(n, (n + 50));
            let li = document.createElement("li");
            li.innerHTML = slicedArr[i];
            ol.appendChild(li);
        }
        button.onclick =() => {
            n = n + 50;
            // ol.innerHTML = "";
            for (i=0; i < 50; i++) {
                let slicedArr = arr.slice(n, (n + 50));
                let li = document.createElement("li");
                li.innerHTML = `${i}:${slicedArr[i]}`;
                ol.appendChild(li);
            }
        }
	});
// if response rejected
// .catch((err) => console.log(err));
