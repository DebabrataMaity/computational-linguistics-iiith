var corpus = [["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots."],
["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"]];

let x = document.getElementById("choose");

function dropdown(){
 if(x.value == "English"){
        document.getElementById('english').style.display = "block";
     document.getElementById('hindi').style.display = "none";
    }
    else if(x.value == "Hindi"){
        document.getElementById('english').style.display = "none";
        document.getElementById('hindi').style.display = "block";
    }
    else if(x.value == "default"){
        document.getElementById('hindi').style.display = "none";
        document.getElementById('english').style.display = "none";
    }
}
