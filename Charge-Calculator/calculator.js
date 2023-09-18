const chargeList = [
    { charge: '', fine: 0, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 0, confiscate: 0 },
    { charge: 'Speeding', fine: 150, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 150, confiscate: 0 },
    { charge: 'Loitering', fine: 250, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 250, confiscate: 0 },
    { charge: 'Animal Cruelty', fine: 200, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 200, confiscate: 0 },
    { charge: 'Trespassing', fine: 200, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 200, confiscate: 0 },
    { charge: 'Criminal Threats', fine: 250, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 250, confiscate: 0 }, 
    { charge: 'Disorderly Conduct', fine: 150, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 150, confiscate: 0 },
    { charge: 'Crimes against a Local', fine: 250, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 250, confiscate: 0 },

    { charge: 'Corruption Of A Court Officer', fine: 450, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 450, confiscate: 0 }, 
    { charge: 'Brandishing', fine: 300, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 300, confiscate: 0 },
    { charge: 'Unlawful Discharge of a Weapon', fine: 350, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 350, confiscate: 1 },
    { charge: 'Concealment of Identity', fine: 400, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 400, confiscate: 0 },
    { charge: 'Assault', fine: 400, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 400, confiscate: 0 }, 
    { charge: 'Obstruction Of A Court Officer', fine: 400, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 400, confiscate: 0 },
    { charge: 'Illegal Duelling', fine: 450, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 450, confiscate: 1 }, 
    { charge: 'Evading Justice', fine: 300, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 300, confiscate: 0 },
    { charge: 'Failure To Comply With A Lawful Order', fine: 350, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 350, confiscate: 0 }, 
    { charge: 'Assisting A Fugitive From Justice', fine: 450, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 450, confiscate: 0 },

    { charge: 'Kidnapping', fine: 500, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 500, confiscate: 0 },
    { charge: 'Impersonating a Court Officer', fine: 500, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 500, confiscate: 6 }, 
    { charge: 'Arson', fine: 600, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 600, confiscate: 2 },
    { charge: 'Attempted Robbery', fine: 800, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 800, confiscate: 8 }, 
    { charge: 'Theft', fine: 500, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 500, confiscate: 2 }, 
    { charge: 'Robbery of Stores, Wagons & Oilrig', fine: 850, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 850, confiscate: 5 },
    { charge: 'Robbery of Forts & Banks', fine: 1000, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 1000, confiscate: 5 },
    { charge: 'Attempted Murder', fine: 1000, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 1000, confiscate: 1 }, 
    { charge: 'Murder', fine: 1300, jail: 30, note: false, stackable: false, stackJailCap: 30, stackFineCap: 1300, confiscate: 1 },
    { charge: 'Possession of Dynamite', fine: 1500, jail: 30, note: false, stackable: true, stackJailCap: 30, stackFineCap: 1500, confiscate: 2 }, 
    { charge: 'Attempted Murder of a Lawman', fine: 1250, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 1250, confiscate: 1 }, 
    { charge: 'Murder of a Lawman', fine: 1500, jail: 30, note: false, stackable: false, stackJailCap: 30, stackFineCap: 1500, confiscate: 1 }, 
    { charge: 'Use of a Marksmen in Major Crimes', fine: 700, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 700, confiscate: 7 },

    { charge: 'Class A Contraband', fine: 1000, jail: 0, note: false, stackable: true, stackJailCap: 0, stackFineCap: 9999999, confiscate: 2 },
    { charge: 'Class B Contraband', fine: 150, jail: 0, note: false, stackable: true, stackJailCap: 0, stackFineCap: 9999999, confiscate: 2 }, 
    { charge: 'Class C Contraband', fine: 100, jail: 0, note: false, stackable: true, stackJailCap: 0, stackFineCap: 9999999, confiscate: 2 },
    { charge: 'Class D Contraband', fine: 50, jail: 0, note: false, stackable: true, stackJailCap: 0, stackFineCap: 9999999, confiscate: 2 }
];

const confiscates = [
    { id: 0, conf: "N/A" },
    { id: 1, conf: "Removal of Weapon(s) used" },
    { id: 2, conf: "Contraband & Potential Cash (From Contraband Sales)" },
    { id: 3, conf: "Amount of appraisal of possessions taken from person" },
    { id: 4, conf: "Proven extorted Goods, Weapons, or Money" },
    { id: 5, conf: "Removal of all Weapons and Contraband. If surrender only removal of Contraband" },
    { id: 6, conf: "Any documents used to falsely pose as a government official" },
    { id: 7, conf: "Scoped Weapon" },
    { id: 8, conf: "Removal of Contraband" }
];

$(document).ready(function(){
    var confiscationBox = null;
    var stackingBox = null;
    var fineBox = null;
    var jailBox = null;
    var charge = null;
    var fine = null;

    $('select').on('change', function(){
        var selectedID = this.id;
        idOfSelected = getRowID(selectedID);

        var selectedValue = this.value;

        
        var chargeChoosen = $.grep(chargeList, function(n, i){
            return n.charge ==selectedValue;
        });
        
        if (chargeChoosen.length > 0){
            charge = chargeChoosen[0];
            
            stackingBox = $("#stacking-" + idOfSelected);
            fineBox = $("#fine-" + idOfSelected);
            jailBox = $("#jail-" + idOfSelected);
            confiscationBox = $("#confiscate-" + idOfSelected);

            if (charge.stackable) {
                stackingBox.prop('disabled', false);
            } else {
                stackingBox.prop('disabled', true);
                stackingBox.val('1');
            }

            if (charge.note) {
                $(this).addClass("noted");
            } else {
                $(this).removeClass("noted");
            }

            confiscationBox.val(charge.confiscate);
            console.log(confiscationBox.val());

        }

        jail = calculateFine(charge.jail, stackingBox.val());
        if (jail > charge.stackJailCap){
            jailBox.val(charge.stackJailCap);
        } else {
            jailBox.val(jail);
        }

        updateFines();
        updateTotalJail(jail);


        updateConfiscation();


    });

    $('.stacking').on('change', function(){

        updateFines();
        updateTotalJail();
        updateTotalFine();
    });

    $('#reduce-fine').on('change', function(){
        updateTotalFine();
    });

    $('#harsh-mode').on('change', function(){
        if ($('#harsh-mode').is(':checked')){
            if(confirm('Do you have Captain+ approval?')){
                console.log('Harsh Mode activated!');
            } else {
                $('#harsh-mode').prop('checked', false);
                console.log("Harsh Mode disabled!")
            }
        } else {
            console.log("Harsh Mode disabled!");
        }    
        updateFines();
        updateTotalFine();
        updateTotalJail();
    });

});

function updateFines(){
    $('.fines').each(function(){
        var fineBoxID = $(this).attr("id")
        var rowID = getRowID(fineBoxID);
        var fineBox = $("#fine-" + rowID);
        var stackingBox = $("#stacking-" + rowID);
        var selectionBox = $("#charge-" + rowID);
        var selectionValue = selectionBox.val(); 

        var selection = $.grep(chargeList, function(n, i){
            return n.charge == selectionValue;
        });
        if (selection.length > 0){
            charge = selection[0];

            var fine = calculateFine(charge.fine, stackingBox.val());

            if (fine > charge.stackFineCap){
                fineBox.val(charge.stackFineCap);
            } else {
                fineBox.val(fine);
            }

            if ( fine > 500) {
                if($('#harsh-mode').is(':checked')){
                    fineBox.val(fine);
                } else {
                    fineBox.val(500);
                }
            }
        }
        updateTotalFine(fine);
    })
}

function getRowID(elementID){
    var idOfSelected = elementID.substr(elementID.length - 1)
    return idOfSelected
}

function updateConfiscation(){
    var confIDList = [];
    var confiscateThis ="";

    $('.confiscation').each(function(){
        var thisID = $(this).val();
        if (confIDList.indexOf(thisID) === -1 && thisID != 0){
            confIDList.push(thisID);
        }
    });

    if(confIDList.includes("5") && confIDList.includes("1")){
        const index = confIDList.indexOf("1");
        confIDList.splice(index, 1);
    }


    if (confIDList.length != 0){
        confIDList.forEach((id) => {
        
            var confiscationChoosen = $.grep(confiscates, function(n, i){
                return n.id == id;
            });
    
            if (confiscationChoosen.length > 0){
                id = confiscationChoosen[0];  
                confiscateThis = confiscateThis + id.conf + "\r\n";
                
            }
    
        }); 
    } else { confiscateThis = "N/A"; }
    
    $('#confiscate').val(confiscateThis);
    console.log(confiscateThis);
}


function updateTotalFine(){
    var totalFineBox = $('#totalFine');
    var totalFine = 0;
    $('.fines').each(function(){
        var countFine = parseInt($(this).val());
        totalFine = totalFine+countFine;
    });
    var reduceAmount = parseFloat($('#reduce-fine').val());
    console.log(reduceAmount);
    
    totalFine = totalFine - (totalFine * reduceAmount);
    totalFineBox.val(totalFine);



}
function updateTotalJail(){
    var totalJailBox = $('#totalJail');
    var totalJail = 0;
    $('.jail').each(function(){
        var countJail = parseInt($(this).val());
        totalJail = totalJail+countJail;
    })

    if (totalJail > 60) {
        totalJailBox.val(60);
    } else {    
        totalJailBox.val(totalJail);
    } 

}

function calculateFine(fineVal, stackVal){
    var chargeFine = fineVal*stackVal;
    return chargeFine;
}
function calculateJail(jailVal, stackVal){
    var chargeJail = jailVal*stackVal;
    return chargeJail;
}

function resetCalc(){
    $('select').each(function(){
        $(this).val("");
        $(this).removeClass("noted");
    })
    $('.stacking').each(function(){
        $(this).val(1);
        $(this).prop('disabled', true);
    })
    $('.fines').each(function(){
        $(this).val(0);
    })
    $('.confiscation').each(function(){
        $(this).val(0);
    })
    $('.jail').each(function(){
        $(this).val(0);
    })
    $('#totalJail').val(0);
    $('#totalFine').val(0);
    $('#confiscate').val("N/A");
    $('#harsh-mode').prop('checked', true);
    $('#reduce-fine').val("0")
}

function clipboardCharges(){
    var copyChargeList = [];
    
    $('.charge-value').each(function(){
        var copyCharge = null; 
        var copyStack = null;
        var chargeID = this.id;
        var rowID = getRowID(chargeID);
        var stackingBox = $("#stacking-" + rowID);
        var selectionBox = $("#charge-" + rowID);
        console.log(selectionBox);
        copyCharge = selectionBox.val(); 
        copyStack = stackingBox.val();
        console.log(copyCharge);

        var chargeToClipboard = copyStack + "x " + copyCharge;

        if (copyCharge !== "") {
            copyChargeList.push(chargeToClipboard);
        }
    });
    console.log(copyChargeList);
    if(navigator && navigator.clipboard && navigator.clipboard.writeText){
        return navigator.clipboard.writeText(copyChargeList.join('\r\n'));
    } 
}