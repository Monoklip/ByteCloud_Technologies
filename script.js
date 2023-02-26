const inputStorage = document.getElementById('inputStorage');
const inputTransfer = document.getElementById('inputTransfer');

const inputStorageNumber = document.querySelector('.storage-number');
const inputTransferNumber = document.querySelector('.transfer-number');

const backblazeGraphics = document.querySelector('.calculator-graphics-provider-backblaze');
const backblazeGraphicsPrice = document.querySelector('.backblaze_p');

const bunnyGraphics = document.querySelector('.calculator-graphics-provider-bunny');
const bunnyGraphicsPrice = document.querySelector('.bunny_p');

const scalewayGraphics = document.querySelector('.calculator-graphics-provider-scaleway');
const scalewayGraphicsPrice = document.querySelector('.scaleway_p');

const vultrGraphics = document.querySelector('.calculator-graphics-provider-vultr');
const vultrGraphicsPrice = document.querySelector('.vultr_p');

const bunnyRadio1 = document.querySelector('.bunny-radio1');
const bunnyRadio2 = document.querySelector('.bunny-radio2');
const scalewayRadio1 = document.querySelector('.scaleway-radio1');
const scalewayRadio2 = document.querySelector('.scaleway-radio2');

bunnyRadio1.checked = true;
scalewayRadio1.checked = true;

inputStorageNumber.textContent = `${inputStorage.value} GB`;
inputTransferNumber.textContent = `${inputTransfer.value} GB`;

let backblazePrice;
let backblazeMinPrice = 7;
let backblazeStorage = 0.005;
let backblazeTransfer = 0.01;
let auditBackblaze;

backblazeGraphics.style.width = `${backblazeMinPrice * 3}px`;
backblazeGraphicsPrice.textContent = `${backblazeMinPrice} $`;

let bunnyPrice;
let bunnyMaxPrice = 10;
let bunnyStorageHDD = 0.01;
let bunnyStorageSSD = 0.02;
let bunnyTransfer = 0.01;
let auditBunny;

bunnyGraphics.style.width = `${((inputStorage.value * bunnyStorageHDD) + (inputTransfer.value * bunnyTransfer)) * 3}px`;
bunnyGraphicsPrice.textContent = `${(inputStorage.value * bunnyStorageHDD) + (inputTransfer.value * bunnyTransfer)} $`;

let scalewayPrice;
let scalewayStorageMulti = 0.06;
let scalewayStorageSingle = 0.03;
let scalewayTransfer = 0.02;
let scalewayFree = 75;
let auditScaleway;

scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer))} $`;

let vultrPrice;
let vultrMinPrice = 5;
let vultrStorage = 0.01;
let vultrTransfer = 0.01;
let auditVultr;

vultrGraphics.style.width = `${vultrMinPrice * 3}px`;
vultrGraphicsPrice.textContent = `${vultrMinPrice} $`;

const resultBackblaze = () => {
    backblazePrice = (inputStorage.value * backblazeStorage) + (inputTransfer.value * backblazeTransfer);

    if (backblazePrice >= backblazeMinPrice) {
        backblazeGraphics.style.width = `${((inputStorage.value * backblazeStorage) + (inputTransfer.value * backblazeTransfer)) * 3}px`;
        backblazeGraphicsPrice.textContent = `${((inputStorage.value * backblazeStorage) + (inputTransfer.value * backblazeTransfer)).toFixed(2)} $`;
        auditBackblaze = (inputStorage.value * backblazeStorage) + (inputTransfer.value * backblazeTransfer);
    }
    else {
        backblazeGraphicsPrice.textContent = `${backblazeMinPrice.toFixed(2)} $`;
        auditBackblaze = backblazeMinPrice;
    };
};

const resultVultr = () => {
    vultrPrice = (inputStorage.value * vultrStorage) + (inputTransfer.value * vultrTransfer);

    if (vultrPrice >= vultrMinPrice) {
        vultrGraphics.style.width = `${((inputStorage.value * vultrStorage) + (inputTransfer.value * vultrTransfer)) * 3}px`;
        vultrGraphicsPrice.textContent = `${((inputStorage.value * vultrStorage) + (inputTransfer.value * vultrTransfer)).toFixed(2)} $`;
        auditVultr = ((inputStorage.value * vultrStorage) + (inputTransfer.value * vultrTransfer));
    }
    else {
        vultrGraphicsPrice.textContent = `${vultrMinPrice.toFixed(2)} $`;
        auditVultr = vultrMinPrice;
    };
};

const resultBunny = () => {
    if (bunnyRadio1.checked) {
        bunnyPrice = (inputStorage.value * bunnyStorageHDD) + (inputTransfer.value * bunnyTransfer);

        if (bunnyPrice <= bunnyMaxPrice) {
            bunnyGraphics.style.width = `${((inputStorage.value * bunnyStorageHDD) + (inputTransfer.value * bunnyTransfer)) * 3}px`;
            bunnyGraphicsPrice.textContent = `${((inputStorage.value * bunnyStorageHDD) + (inputTransfer.value * bunnyTransfer)).toFixed(2)} $`;
            auditBunny = (inputStorage.value * bunnyStorageHDD) + (inputTransfer.value * bunnyTransfer);
        }
        else {
            bunnyGraphicsPrice.textContent = `${bunnyMaxPrice.toFixed(2)} $`;
            auditBunny = bunnyMaxPrice;
        };
    }
    else if (bunnyRadio2.checked) {
        bunnyPrice = (inputStorage.value * bunnyStorageSSD) + (inputTransfer.value * bunnyTransfer);

        if (bunnyPrice <= bunnyMaxPrice) {
            bunnyGraphics.style.width = `${((inputStorage.value * bunnyStorageSSD) + (inputTransfer.value * bunnyTransfer)) * 3}px`;
            bunnyGraphicsPrice.textContent = `${((inputStorage.value * bunnyStorageSSD) + (inputTransfer.value * bunnyTransfer)).toFixed(2)} $`;
            auditBunny = (inputStorage.value * bunnyStorageSSD) + (inputTransfer.value * bunnyTransfer);
        }
        else {
            bunnyGraphicsPrice.textContent = `${bunnyMaxPrice.toFixed(2)} $`;
            auditBunny = bunnyMaxPrice;
        };
    };
};

const resultScaleway = () => {
    if (scalewayRadio1.checked) {
        scalewayPrice = ((inputStorage.value) * scalewayStorageMulti) + ((inputTransfer.value) * scalewayTransfer);

        if (inputStorage.value <= scalewayFree && inputTransfer.value <= scalewayFree) {
            scalewayStorageMulti = 0;
            scalewayTransfer = 0;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
        else if (inputStorage.value > scalewayFree && inputTransfer.value <= scalewayFree) {
            scalewayStorageMulti = 0.06;
            scalewayTransfer = 0;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
        else if (inputStorage.value <= scalewayFree && inputTransfer.value > scalewayFree) {
            scalewayStorageMulti = 0;
            scalewayTransfer = 0.02;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
        else {
            scalewayStorageMulti = 0.06;
            scalewayTransfer = 0.02;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageMulti) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
    }
    else if (scalewayRadio2.checked) {
        scalewayPrice = ((inputStorage.value) * scalewayStorageSingle) + ((inputTransfer.value) * scalewayTransfer);

        if (inputStorage.value <= scalewayFree && inputTransfer.value <= scalewayFree) {
            scalewayStorageSingle = 0;
            scalewayTransfer = 0;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
        else if (inputStorage.value > scalewayFree && inputTransfer.value <= scalewayFree) {
            scalewayStorageSingle = 0.03;
            scalewayTransfer = 0;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
        else if (inputStorage.value <= scalewayFree && inputTransfer.value > scalewayFree) {
            scalewayStorageSingle = 0;
            scalewayTransfer = 0.02;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
        else {
            scalewayStorageSingle = 0.03;
            scalewayTransfer = 0.02;

            scalewayGraphics.style.width = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)) * 3}px`;
            scalewayGraphicsPrice.textContent = `${(((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer)).toFixed(2)} $`;
            auditScaleway = ((inputStorage.value - scalewayFree) * scalewayStorageSingle) + ((inputTransfer.value - scalewayFree) * scalewayTransfer);
        }
    };
}

inputStorage.addEventListener('input', () => {
    inputStorageNumber.textContent = `${inputStorage.value} GB`;

    resultBackblaze();
    resultVultr();
    resultBunny();
    resultScaleway();
    auditColor();
});

inputTransfer.addEventListener('input', () => {
    inputTransferNumber.textContent = `${inputTransfer.value} GB`;

    resultBackblaze();
    resultVultr();
    resultBunny();
    resultScaleway();
    auditColor();
});

bunnyRadio1.addEventListener('change', () => {
    resultBackblaze();
    resultVultr();
    resultBunny();
    resultScaleway();
    auditColor();
});

bunnyRadio2.addEventListener('change', () => {
    resultBackblaze();
    resultVultr();
    resultBunny();
    resultScaleway();
    auditColor();
});

scalewayRadio1.addEventListener('change', () => {
    resultBackblaze();
    resultVultr();
    resultBunny();
    resultScaleway();
    auditColor();
});

scalewayRadio2.addEventListener('change', () => {
    resultBackblaze();
    resultVultr();
    resultBunny();
    resultScaleway();
    auditColor();
});

const auditColor = () => {
    if (auditBackblaze <= auditBunny && auditBackblaze <= auditVultr && auditBackblaze <= auditScaleway) {
        backblazeGraphics.style.background = `orange`;
    }
    else {
        backblazeGraphics.style.background = `grey`;
    };

    if (auditBunny <= auditBackblaze && auditBunny <= auditVultr && auditBunny <= auditScaleway) {
        bunnyGraphics.style.background = `orange`;
    }
    else {
        bunnyGraphics.style.background = `grey`;
    };

    if (auditVultr <= auditBackblaze && auditVultr <= auditBunny && auditVultr <= auditScaleway) {
        vultrGraphics.style.background = `orange`;
    }
    else {
        vultrGraphics.style.background = `grey`;
    };

    if (auditScaleway <= auditBackblaze && auditScaleway <= auditBunny && auditScaleway <= auditVultr) {
        scalewayGraphics.style.background = `orange`;
    }
    else {
        scalewayGraphics.style.background = `grey`;
    };
};

resultBackblaze();
resultVultr();
resultBunny();
resultScaleway();
auditColor();