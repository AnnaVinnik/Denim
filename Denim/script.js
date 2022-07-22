"use strict";

function pow(x, n) {
    if (x < 1) {
        return;
    }
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= x;
    }
    return res;
}

//alert(`hi, pow(2,3) =  ${pow}`);