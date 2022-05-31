// Check if mobile or not
if (/Mobile|Android|iP(hone|od)|Kindle|Silk-Accelerated|(hpw|web)OS|Blackberry|IEMobile|Opera M(obi|ini)/.test(navigator.userAgent)) {
    var onDevice = 'mobile';
}else{
    var onDevice = 'desktop';
}

