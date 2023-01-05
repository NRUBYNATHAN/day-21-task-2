async function data(){
    
    try{
    let url="https://api.fda.gov/drug/event.json?limit=10"
    let fet=await fetch(url)
    let jso=await fet.json()


  for(var j =1;j<10;j++){  
    let cre_td1=document.createElement("td")
    cre_td1.innerText=jso.results[j].patient.drug[0].openfda.application_number[0];
    let cre_td2=document.createElement("td")
    cre_td2.innerText=jso.results[j].patient.drug[0].openfda.brand_name[0];
    let cre_td3=document.createElement("td")
    cre_td3.innerText=jso.results[j].patient.drug[0].openfda.generic_name[0];
    let cre_td4=document.createElement("td")
    cre_td4.innerText=jso.results[j].patient.drug[0].openfda.manufacturer_name[0];
    let cre_td5=document.createElement("td")
    cre_td5.innerText=jso.results[j].patient.drug[0].openfda.product_ndc[0];
    let cre_td6=document.createElement("td")
    cre_td6.innerText=jso.results[j].patient.drug[0].openfda.product_type[0];
    let cre_td7=document.createElement("td")
    cre_td7.innerText=jso.results[j].patient.drug[0].openfda.route[0];
    let cre_td8=document.createElement("td")
    cre_td8.innerText=jso.results[j].patient.drug[0].openfda.substance_name[0];



    var datas=[cre_td1,cre_td2,cre_td3,cre_td4,cre_td5,cre_td6,cre_td7,cre_td8]
    let cre_tr=document.createElement("tr")

for(var i = 0;i<datas.length;i++){
    
    let cre_td=document.createElement("td")
    cre_td.append(datas[i])
    cre_tr.append(cre_td)
    document.querySelector("tbody").append(cre_tr)

}}
    }
    
catch(e){
console.log(e)
document.querySelector("body").innerText("this api is not valid")

    }
}
data()